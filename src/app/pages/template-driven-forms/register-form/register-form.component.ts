import { Component, inject, Injectable, signal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { Contact } from '../../../models/contact';
import { NgbDateParserFormatter, NgbDatepickerI18n, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const initialContact: Contact = {
  id: 0,
  firstname: '',
  civilite: '',
  birthDate: {
    year: 0,
    month: 0,
    day: 0
  }
};

const I18N_VALUES = {
	fr: {
		weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
		months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
		weekLabel: 'sem',
	},
	// Autres langages
};

// Service contenant la langue
@Injectable()
export class I18n {
	language = 'fr';
}

// Service personnalisé pour la traduction des mois et des jours de la semaine
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
	private _i18n = inject(I18n);

	getWeekdayLabel(weekday: number): string {
    return I18N_VALUES.fr.weekdays[weekday - 1];
	}
	override getWeekLabel(): string {
    return I18N_VALUES.fr.weekLabel;
	}
	getMonthShortName(month: number): string {
    return I18N_VALUES.fr.months[month - 1];
	}
	getMonthFullName(month: number): string {
		return this.getMonthShortName(month);
	}
	getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.day}-${date.month}-${date.year}`;
	}
}


/**
 * Service qui gère la façon dont la date est représentée dans ngModel
 */
// @Injectable()
// export class CustomAdapter extends NgbDateAdapter<string> {
// 	readonly DELIMITER = '-';

// 	fromModel(value: string | null): NgbDateStruct | null {
// 		if (value) {
// 			const date = value.split(this.DELIMITER);
// 			return {
// 				day: parseInt(date[0], 10),
// 				month: parseInt(date[1], 10),
// 				year: parseInt(date[2], 10),
// 			};
// 		}
// 		return null;
// 	}

// 	toModel(date: NgbDateStruct | null): string | null {
// 		return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
// 	}
// }

/**
 * Service qui gère la manière dont la date est rendue et analysée à partir du clavier,
 * c'est-à-dire dans le champ de saisie lié
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
	readonly DELIMITER = '/';

	parse(value: string): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	format(date: NgbDateStruct | null): string {

    let dateDay = '';
    if(date) {
      dateDay = date.day < 10 ? '0' + date.day : date.day.toString();
    }
    
    let dateMonth = '';
    if(date) {
      dateMonth = date.month < 10 ? '0' + date.month : date.month.toString();
    }

    return date ? dateDay + this.DELIMITER + dateMonth + this.DELIMITER + date.year : '';
		// return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
	}
}


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbDatepickerModule, LoaderComponent, BreadcrumbComponent, JsonPipe],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
  providers: [
    I18n, 
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    //{ provide: NgbDateAdapter, useClass: CustomAdapter },
		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class RegisterFormComponent {

  theme: string = 'Template-driven Form';
  page: string = 'Inscription';

  contact = signal<Contact>(initialContact);

  messageInscription = signal('');

  onSubmit(registerForm: NgForm): void {
    if(registerForm.valid){
      this.contact().id = 0;

      this.messageInscription.set(`${this.contact().firstname}, votre inscription a été prise en compte`)
    }
  }


  onReset(registerForm: NgForm) {
    registerForm.reset();
    this.messageInscription.set('');
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