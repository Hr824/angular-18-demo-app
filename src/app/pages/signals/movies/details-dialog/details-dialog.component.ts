import { Component, inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Movie } from '../../../../models/movie';

@Component({
  selector: 'app-details-dialog',
  standalone: true,
  imports: [],
  templateUrl: './details-dialog.component.html',
  styleUrl: './details-dialog.component.css'
})
export class DetailsDialogComponent {
  dialogRef = inject<DialogRef<Movie>>(DialogRef<Movie>);
  data = inject(DIALOG_DATA);
}