import { Component, OnInit } from '@angular/core';
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

  //###################################
  //Authentication with BehaviorSubject
  //###################################
  //isAuth!: boolean;

  //###################################
  //Authentication with Signals
  //###################################
  //isLogged = this.authService.isLogged;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){ }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.maxLength(10)]
      ],
      password: ['', [
        Validators.required,
        Validators.maxLength(10)]
      ]
    });

    // if(this.authService.isAuthenticated())
    //   this.router.navigate(['']);


    // this.authService.isAuth$.subscribe({
    //   next: (value) => this.isAuth = value
    // });

    // if(this.isAuth)
    //   this.router.navigate(['/home']);

    //TEST
    //this.isLogged = this.authService.isLogged();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Token récupéré après l'appel
      const mockToken = 'mock-jwt-token';
      this.authService.login(mockToken);
      
      //TEST=================================== 
      // this.authService.isAuth$.subscribe({
      //   next: (value) => this.isAuth = value
      // });
      //this.isLogged.set(this.authService.isLogged());
      //this.isLogged = this.authService.isLogged();

      this.router.navigate(['/admin/dashboard']);
    }
  }

  onReset() {
    this.loginForm.reset();
  }

  showErrorMessage(controlName: string, errorCode: string): boolean {
    const control = this.loginForm.controls[controlName];

    return control.hasError(errorCode) && (control.touched || control.dirty);
  }
}