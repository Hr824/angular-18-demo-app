import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  borderColor = input<string>();

  /*
  Valeurs Bootstrap :
  border-primary
  border-secondary
  border-success
  border-danger
  border-warning
  border-info
  border-light
  border-dark
  */
}