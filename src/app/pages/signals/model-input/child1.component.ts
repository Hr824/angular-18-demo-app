import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  counter = model.required<number>();

  increaseCounter(): void {
    if(this.counter() < 10){
      this.counter.update(() => this.counter() + 1);
    }
  }

  decreaseCounter(): void {
    this.counter.update(() => {
      if(this.counter() > 0) { return this.counter() - 1 }

      return 0;
    });
  }
}