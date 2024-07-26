import { Component, computed, ElementRef, inject, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';
import { Article } from '../../../models/article';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, LoaderComponent, BreadcrumbComponent, Child1Component, Child2Component, Child3Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, OnDestroy {

  theme = signal<string>('Signals');
  page = signal<string>('Model Input');

  //#################################
  //Exemple 1
  //#################################
  articles = signal<Article[]>([]);
  selectedArticles = signal<Article[]>([]);
  //total = signal(0);
  subscriptions: Subscription = new Subscription();

  articleService = inject(ArticleService);

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.subscriptions .unsubscribe();
  }

  getArticles(): void {
    const articles$ = this.articleService.getArticles();

    this.subscriptions.add(articles$.subscribe({
      next: data => { this.articles.set(data) }
    }));  
  }

  total = computed(() => {

    let t = 0;

    this.selectedArticles().forEach((article) => {
      t +=  article.quantity * article.unitPrice;
    });

    return t;
  });



  //#################################
  //Exemple 2
  //#################################
  counter = signal(0);
  increaseCounter(): void {
    if(this.counter() < 10){
      this.counter.update(() => this.counter() + 1);
    }
  }

  decreaseCounter(): void {
    this.counter.update(() => {
      if(this.counter() > 0) { return this.counter() - 1 }

      return 0;
    });

  }



  //#################################
  //Exemple 3
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