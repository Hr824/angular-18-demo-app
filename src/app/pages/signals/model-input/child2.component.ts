import { Component, computed, ElementRef, model, viewChild } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  option = model.required<string>();
  city = model.required<string>();

  childSelect = viewChild.required<ElementRef<HTMLSelectElement>>('childSelect');
  childSelectedIndex = computed(() => {
    const elmt = this.childSelect().nativeElement;
    elmt.selectedIndex = Number(this.option());

    //return elmt.selectedIndex;
  });


  onChange(event: Event) {
    let elmt = event.target as HTMLSelectElement;
    this.option.set(elmt.value);
    this.city.set(elmt.selectedOptions[0].innerText);
  }
}