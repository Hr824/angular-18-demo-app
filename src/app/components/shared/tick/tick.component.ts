import { Component, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-tick',
  standalone: true,
  imports: [],
  templateUrl: './tick.component.html',
  styleUrl: './tick.component.css'
})
export class TickComponent implements OnInit {

  tick = signal(0);
  tick$ = interval(1000).pipe(
    takeUntilDestroyed()
  );

  ngOnInit(): void {
    this.tick$.subscribe({
      next: t => {
        this.tick.update((value: number) => value + 1)
        console.log('TICK', t);
      }
    });
  }
}