import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  counter = model.required<number>();

  increaseCounter(): void {
    this.counter.update(() => this.counter() + 1);
  }

  decreaseCounter(): void {
    this.counter.update(() => this.counter() - 1);
  }
}