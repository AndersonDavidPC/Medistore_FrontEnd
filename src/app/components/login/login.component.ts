import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isRegisterMode = false;
  isResetMode = false;
  errorMessage: string = '';
  validationMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nombre_usuario: ['', Validators.required],
      clave: ['', Validators.required],
      userType: ['regente', Validators.required], // Default userType
      cedula: [''],
      nombre: ['']
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      const userType = this.authService.getCurrentUserType(); // Assuming you have a method to get the user type
      switch (userType) {
        case 'regente':
          this.router.navigate(['/regente/dashboard']);
          break;
        case 'coordinador':
          this.router.navigate(['/coordinador/dashboard']);
          break;
        case 'admin':
          this.router.navigate(['/admin/dashboard']);
          break;
        default:
          this.router.navigate(['/productos']);
      }
    }
  }

  login(): void {
    const { nombre_usuario, clave, userType } = this.loginForm.value;
    let loginEndpoint = '';

    switch (userType) {
      case 'regente':
        loginEndpoint = 'regentes/login';
        break;
      case 'coordinador':
        loginEndpoint = 'coordinadores/login';
        break;
      case 'admin':
        loginEndpoint = 'admin/login';
        break;
      default:
        loginEndpoint = 'auth/login';
    }

    this.authService.login(nombre_usuario, clave, loginEndpoint).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/productos']);
      },
      (error) => {
        console.error('Login error', error);
        this.errorMessage =
          'Error al iniciar sesión. Por favor, verifica tus credenciales.';
      }
    );
  }

  register(): void {
    const { nombre_usuario, clave, userType, cedula, nombre } = this.loginForm.value;
    let registerEndpoint = '';

    switch (userType) {
      case 'regente':
        registerEndpoint = 'api/regentes/register';
        break;
      case 'coordinador':
        registerEndpoint = 'api/coordinadores/register';
        break;
      default:
        this.errorMessage = 'Tipo de usuario no válido para registro.';
        return;
    }

    this.authService.register({ nombre_usuario, clave, userType, cedula, nombre }).subscribe(
      (response) => {
        this.isRegisterMode = false;
        this.validationMessage = 'Registro exitoso. Ahora puede iniciar sesión.';
      },
      (error) => {
        console.error('Register error', error);
        this.errorMessage = 'Error al registrarse. Por favor, intente nuevamente.';
      }
    );
  }

  toggleMode(mode: string): void {
    this.isRegisterMode = mode === 'register';
    this.isResetMode = mode === 'reset';
  }

  onSubmit(): void {
    if (this.isRegisterMode) {
      this.register();
    } else if (this.isResetMode) {
      // Handle reset password
    } else {
      this.login();
    }
  }
}
