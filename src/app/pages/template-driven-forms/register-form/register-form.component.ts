import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { Contact } from '../../../models/contact';

import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const initialContact: Contact = {
  id: 0,
  firstname: '',
  civilite: 'Madame',
  birthDate: {
    year: 0,
    month: 0,
    day: 0
  }
};


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbDatepickerModule, LoaderComponent, BreadcrumbComponent, JsonPipe],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {

  // @ViewChild('registerForm') registerForm!: NgForm;


  theme: string = 'Template-driven Form';
  page: string = 'Inscription';

  contact = signal<Contact>(initialContact);

  //model!: NgbDateStruct;

  ngOnInit(): void {
    //this.contact.set({ id: 0, firstname: 'INIT !!!', civilite: 'Monsieur' })

    // setTimeout(() => {
    //   this.registerForm.setValue(this.contact());
    // });
  }


  onSubmit(registerForm: NgForm): void {

    if(registerForm.valid){
      console.log(registerForm.value);

      console.log(this.contact());


    }


    // if(this.menuForm.valid){
    //   // console.table(this.menuForm.value);
    //   // console.log('firstname', this.menuForm.controls['firstname'].value);
    //   // console.log('entrees', this.menuForm.controls['entrees'].value);
    //   // console.log('plats', this.menuForm.controls['plats'].value);
    //   // console.log('fromages', this.menuForm.controls['fromages'].value);
    //   // console.log('desserts', this.menuForm.controls['desserts'].value);
    //   // console.log('cafe', this.menuForm.controls['cafe'].value);

    //   this.selectedMenu.set({
    //      firstname: this.menuForm.controls['firstname'].value,
    //      entree: this.menuForm.controls['entrees'].value,
    //      plat: this.menuForm.controls['plats'].value,
    //      fromage: this.menuForm.controls['fromages'].value,
    //      dessert: this.menuForm.controls['desserts'].value,
    //      cafe: this.menuForm.controls['cafe'].value
    //   });
    // }
  }


  onReset(registerForm: NgForm) {
    registerForm.resetForm(initialContact);

    // setTimeout(() => {
    //   // this.registerForm.setValue(initialContact);
    //   registerForm.setValue(initialContact);
    // });
    // this.selectedMenu.set(initialMenu);
  }


  /**
   * Gestion des messages de validation du formulaire avec le formulaire en paramètre.
   * Les messages peuvent également être gérés directement dans le template.
   * @param registerForm Le formulaire
   * @param controlName Le champ à valider
   * @param errorCode L'erreur à valider
   * @returns true s'il y a une erreur, false sinon
   */
  showErrorMessage(registerForm: NgForm, controlName: string, errorCode: string): boolean {
    const control = registerForm.controls[controlName];

    if(control && control.hasError(errorCode) && (control.touched || control.dirty)){
      return true;
    }

    return false;
  }

  /**
   * Gestion des messages de validation du formulaire avec le FormControl en paramètre.
   * Les messages peuvent également être gérés directement dans le template.
   * @param registerForm Le formControl
   * @param errorCode L'erreur à valider
   * @returns true s'il y a une erreur, false sinon
   */
  showErrorMessage2(model: NgModel, errorCode: string): boolean {
    const control = model.control;

    if(control && control.hasError(errorCode) && (control.touched || control.dirty)){
      return true;
    }

    return false;
  }
}