import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { Menu } from '../../../models/menu';

const initialMenu: Menu = {
  firstname: '',
  entree: '',
  plat: '',
  fromage: false,
  dessert: '',
  cafe: false
};

const regexPattern: string = '^([A-Za-zàâäéèêëîïôöùûüçÇÀÂÄÉÈÊËÎÏÔÖÙÛÜ]+[\-]{0,1}[ ]{0,1}[A-Za-zàâäéèêëîïôöùûüçÇÀÂÄÉÈÊËÎÏÔÖÙÛÜ]*)$';

@Component({
  selector: 'app-menu-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LoaderComponent, BreadcrumbComponent],
  templateUrl: './menu-form.component.html',
  styleUrl: './menu-form.component.css'
})
export class MenuFormComponent {

  theme: string = 'Reactive Form';
  page: string = 'Menu';

  selectedMenu = signal<Menu>(initialMenu); 
  menuForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
  }


  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      firstname: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(regexPattern)]
      ],
      entrees: null,
      plats: ['Confit de canard pommes à l\'ail', {nonNullable: true}],
      fromages: [false, {nonNullable: true}],
      desserts: null,
      cafe: [false, {nonNullable: true}]
    });
  }


  onSubmit(): void {
    if(this.menuForm.valid){
      // console.table(this.menuForm.value);
      // console.log('firstname', this.menuForm.controls['firstname'].value);
      // console.log('entrees', this.menuForm.controls['entrees'].value);
      // console.log('plats', this.menuForm.controls['plats'].value);
      // console.log('fromages', this.menuForm.controls['fromages'].value);
      // console.log('desserts', this.menuForm.controls['desserts'].value);
      // console.log('cafe', this.menuForm.controls['cafe'].value);

      this.selectedMenu.set({
         firstname: this.menuForm.controls['firstname'].value,
         entree: this.menuForm.controls['entrees'].value,
         plat: this.menuForm.controls['plats'].value,
         fromage: this.menuForm.controls['fromages'].value,
         dessert: this.menuForm.controls['desserts'].value,
         cafe: this.menuForm.controls['cafe'].value
      });
    }
  }

  onReset() {
    this.menuForm.reset();
    this.selectedMenu.set(initialMenu);
  }

  showErrorMessage(controlName: string, errorCode: string): boolean {
    const control = this.menuForm.controls[controlName];

    return control.hasError(errorCode) && (control.touched || control.dirty);
  }
}