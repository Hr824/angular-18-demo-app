import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginErrorMessage = signal<string>('');

  //###################################
  //Authentication with BehaviorSubject
  //###################################
  // isAuth!: boolean;

  //###################################
  //Authentication with Signals
  //###################################
  isLogged = this.authService.isLogged;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){ }

  ngOnInit(): void {

    //Set isAuth (BehaviorSubject) and isLogged$$ (WritableSignal) in AuthService
    if(this.authService.isAuthenticated())
      this.router.navigate(['/admin/dashboard']);

    //Subscribe only for isAuth$ Observable in AuthService
    // this.authService.isAuth$.subscribe({
    //   next: (value) => this.isAuth = value
    // });

    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.maxLength(6)]
      ],
      password: ['', [
        Validators.required,
        Validators.maxLength(6)]
      ]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      if(this.authService.login(username, password)){
        this.loginErrorMessage.set('');

        this.router.navigate(['/admin/dashboard']);
      }
      else{
        this.loginErrorMessage.set('Nom ou mot de passe incorrect');
      }
    }
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const { username, password } = this.loginForm.value;
  //     //Mock JWT Token récupéré après l'appel de l'API côté backend
  //     const mockToken = 'mock-jwt-token';
  //     this.authService.login(mockToken);

  //     this.router.navigate(['/admin/dashboard']);
  //   }
  // }

  onReset() {
    this.loginForm.reset();
  }

  showErrorMessage(controlName: string, errorCode: string): boolean {
    const control = this.loginForm.controls[controlName];

    return control.hasError(errorCode) && (control.touched || control.dirty);
  }
}