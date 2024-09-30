import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  buttonId = input<number>();
  buttonText = input<string>();


  buttonClicked = output<Event>();
  emitClick(event: Event) {
    this.buttonClicked.emit(event);
  }
}