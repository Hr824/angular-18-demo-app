import { Component, OnInit, signal } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { Todo } from '../../../../models/todo';
import { LoaderComponent } from '../../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../../components/shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-simple-list',
  standalone: true,
  imports: [CdkDropList, CdkDrag, LoaderComponent, BreadcrumbComponent],
  templateUrl: './simple-list.component.html',
  styleUrl: './simple-list.component.css'
})
export class SimpleListComponent implements OnInit {

  theme = signal<string>('Cdk');
  theme1 = signal<string>('Drag and Drop');
  page = signal<string>('Liste simple');

  localStorageKey: string = 'todos';

  todosTab: string|null = window.localStorage ? localStorage.getItem(this.localStorageKey) : null;

  todos = signal<Todo[]>(this.todosTab ? JSON.parse(this.todosTab) : [{ id: 1, title: 'Nouvelle tâche (n°1)'}]);

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {

    moveItemInArray(this.todos(), event.previousIndex, event.currentIndex);
    this.setLocalStorageItem(this.localStorageKey, JSON.stringify(this.todos()));

    // console.log('event.item.data', event.item.data);
    // console.log('event.previousIndex', event.previousIndex);
    // console.log('event.currentIndex', event.currentIndex);
    // console.log('todos', this.todos());
  }

  addItem(): void{

    //Max 8 items pour l'exemple
    if(this.todos().length < 8) {
      let idMax = this.todos().length === 0 ? 0 : this.todos().reduce((a,b) => a.id > b.id ? a : b).id;
    
      this.todos().push({ 
        id: (idMax + 1),
        title: 'Nouvelle tâche (n°' + (idMax + 1) + ')'
      });
  
      this.setLocalStorageItem(this.localStorageKey, JSON.stringify(this.todos()));
    }
  }


  deleteItem(todo: Todo) {
    const indexToDelete = this.todos().findIndex(t => t.id === todo.id);
    if (indexToDelete > - 1) {
      this.todos().splice(indexToDelete, 1);
      this.setLocalStorageItem(this.localStorageKey, JSON.stringify(this.todos()));
    }
  }

  deleteAllItems() {
    this.todos.set([]);
    this.setLocalStorageItem(this.localStorageKey, JSON.stringify(this.todos()));
  }


  setLocalStorageItem(key: string, value: string): void{
    if(window.localStorage){
      localStorage.setItem(key, value);
    }
  }
}