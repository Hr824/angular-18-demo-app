import { Component, inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Movie } from '../../../../models/movie';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
  dialogRef = inject<DialogRef<Movie>>(DialogRef<Movie>);
  data = inject(DIALOG_DATA);
}