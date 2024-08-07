import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from './store/cart/cart.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgbDropdownModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //###################################
  //Authentication with BehaviorSubject
  //###################################
  isAuth!: boolean;

  //###################################
  //Authentication with Signals
  //###################################
  isLogged = this.authService.isLogged;


  //Pour les dropdown du menu
  collapsed = true;

  cartNbArticles$: Observable<number>;

  constructor(private cartService: CartService, private authService: AuthService) {
    this.cartNbArticles$ = this.cartService.getCartNbArticles();  
  }

  ngOnInit(): void {

    this.authService.isAuthenticated();

     this.authService.isAuth$.subscribe({
        next: (value) => this.isAuth = value
     });
  }

  logout(): void{
    this.authService.logout();
  }
}