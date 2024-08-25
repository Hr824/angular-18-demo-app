import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { LoaderComponent } from '../../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../../components/shared/breadcrumb/breadcrumb.component';
import { KanbanTask } from '../../../../models/kanban-task';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule, CdkDropListGroup, CdkDropList, CdkDrag, LoaderComponent, BreadcrumbComponent],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css'
})
export class KanbanComponent {

  theme: string = 'Cdk';
  theme1: string = 'Drag and Drop';
  page: string = 'Kanban';

  localStorageKey: string = 'kanbanTasks';
  nbTasksMax: number = 10; //Nombre maximum de tâches pour l'exemple

  // initialAllTasks = {
  //   todos: [
  //     { id: 1, title: 'Get to work' },
  //     { id: 2, title: 'Pick up groceries' },
  //     { id: 3, title: 'Go home' },
  //     { id: 4, title: 'Fall asleep' }
  //   ],
  //   inProgress: [
  //     { id: 5, title: 'Check planning' }
  //   ],
  //   testsQa: [
  //     { id: 6, title: 'Test localization' },
  //     { id: 7, title: 'Go home' }
  //   ],
  //   done: [
  //     { id: 8, title: 'Get up' },
  //     { id: 9, title: 'Brush teeth' },
  //     { id: 10, title: 'Take a shower' },
  //     { id: 11, title: 'Check e-mail' },
  //     { id: 12, title: 'Walk dog' }
  //   ]
  // };

  initialAllTasks = {
    todos: [
      { id: 1, title: 'Nouvelle tâche' }
    ],
    inProgress: [],
    testsQa: [],
    done: []
  };

  allTasksInStorage: string|null = window.localStorage ? localStorage.getItem(this.localStorageKey) : null;
  
  allTasks = signal<{ todos: KanbanTask[], inProgress: KanbanTask[], testsQa: KanbanTask[], done: KanbanTask[] }>(this.allTasksInStorage ? JSON.parse(this.allTasksInStorage) : this.initialAllTasks);
  
  allTasksCount = computed(() => {
    //console.log('todos', this.allTasks().todos.length)

    return (this.allTasks().todos.length +
           this.allTasks().inProgress.length +
           this.allTasks().testsQa.length +
           this.allTasks().done.length);
  });


  drop(event: CdkDragDrop<KanbanTask[]>) {

    // console.log('event.previousContainer.id', event.previousContainer.id);
    // console.log('event.container.id', event.container.id);
    // console.log('event.container', event.container)
    // console.log('event.container.data', event.container.data)

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      //console.log('allTasks moveItemInArray', this.allTasks())
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      //console.log('allTasks transferArrayItem', this.allTasks())
    }

    this.setLocalStorageItem(this.localStorageKey, JSON.stringify(this.allTasks()));
  }


  addItem(): void{

    if(this.allTasksCount() < this.nbTasksMax) {
      
      let idMaxTodos = this.allTasks().todos.length === 0 ? 0 : this.allTasks().todos.reduce((a,b) => a.id > b.id ? a : b).id;
      let idMaxInProgress = this.allTasks().inProgress.length === 0 ? 0 : this.allTasks().inProgress.reduce((a,b) => a.id > b.id ? a : b).id;
      let idMaxTestsQa = this.allTasks().testsQa.length === 0 ? 0 : this.allTasks().testsQa.reduce((a,b) => a.id > b.id ? a : b).id;
      let idMaxDone = this.allTasks().done.length === 0 ? 0 : this.allTasks().done.reduce((a,b) => a.id > b.id ? a : b).id;

      let newTodosItem: KanbanTask[] = this.allTasks().todos;
      newTodosItem.push({ 
        id: Math.max(idMaxTodos, idMaxInProgress, idMaxTestsQa, idMaxDone) + 1,
        title: 'Nouvelle tâche'
      });

      this.allTasks.set({ 
        todos: newTodosItem,
        inProgress: this.allTasks().inProgress,
        testsQa: this.allTasks().testsQa,
        done: this.allTasks().done
      });

      this.setLocalStorageItem(this.localStorageKey, JSON.stringify(this.allTasks()));
    }
  }


  deleteItem(todo: KanbanTask) {

        let newTodosItem: KanbanTask[] = this.allTasks().todos;
        const indexToDelete = newTodosItem.findIndex(t => t.id === todo.id);
        if (indexToDelete > - 1) {
          newTodosItem.splice(indexToDelete, 1);

          this.allTasks.set({ 
            todos: newTodosItem,
            inProgress: this.allTasks().inProgress,
            testsQa: this.allTasks().testsQa,
            done: this.allTasks().done
          });
  
          this.setLocalStorageItem(this.localStorageKey, JSON.stringify(this.allTasks()));
        }
  }


  deleteAllItems() {

    this.allTasks.set({ todos: [], inProgress: [], testsQa: [], done: [] });

    this.setLocalStorageItem(this.localStorageKey, JSON.stringify(this.allTasks()));
  }


  setLocalStorageItem(key: string, value: string): void{
    if(window.localStorage){
      localStorage.setItem(key, value);
    }
  }
}