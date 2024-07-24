import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [LoaderComponent, BreadcrumbComponent, Child1Component, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  theme = signal<string>('Signals');
  page = signal<string>('Model Input');

  //#################################
  //Exemple 1
  //#################################
  counter = signal(0);
  increaseCounter(): void {
    this.counter.update(() => this.counter() + 1);
  }

  decreaseCounter(): void {
    this.counter.update(() => this.counter() - 1);
  }



  //#################################
  //Exemple 2
  //#################################
  selectedOption = signal('0');
  selectedCity = signal<string>('Aucune ville sélectionnée');

  parentSelect = viewChild.required<ElementRef<HTMLSelectElement>>('parentSelect');
  parentSelectedIndex = computed(() => {
    const elmt = this.parentSelect().nativeElement;
      elmt.selectedIndex = Number(this.selectedOption());

    //return elmt.selectedIndex;
  });


  onChange(event: Event) {
    let elmt = event.target as HTMLSelectElement;
    this.selectedOption.set(elmt.value);
    this.selectedCity.set(elmt.selectedOptions[0].innerText);
  }
}