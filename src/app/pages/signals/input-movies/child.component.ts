import { Component, input } from '@angular/core';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  movie = input<Movie>();
}
