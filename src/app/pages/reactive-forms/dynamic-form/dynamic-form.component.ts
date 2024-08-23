import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { map, Observable, Subscription } from 'rxjs';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { QuestionService } from '../../../services/question.service';
import { QuestionControl, Question } from '../../../models/question';

const regexPattern: string = '^([A-Za-z0-9àâäéèêëîïôöùûüçÇÀÂÄÉÈÊËÎÏÔÖÙÛÜ]+[\-]{0,1}[ ]{0,1}[A-Za-z0-9àâäéèêëîïôöùûüçÇÀÂÄÉÈÊËÎÏÔÖÙÛÜ]*)$';
const idQuestionMin: number = 1;
const idQuestionMax: number = 30;
const nbQuestionsToSelect: number = 5;

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LoaderComponent, BreadcrumbComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit, OnDestroy {

  theme = signal<string>('Reactive Form');
  page = signal<string>('Questionnaire dynamique');

  questions = signal<Question[]>([]);
  selectedQuestions = signal<Question[]>([]);

  subscriptions: Subscription = new Subscription();

  questionnaireForm: FormGroup;

  questionService = inject(QuestionService);

  constructor(private formBuilder: FormBuilder){
    this.questionnaireForm = this.formBuilder.group({});
  }

  ngOnInit(): void {

    const questions$ = this.getAllQuestions();

    const questionIdList: number[] = this.questionService.getRandomQuestionIds(idQuestionMin, idQuestionMax, nbQuestionsToSelect);

    this.subscriptions.add(
      questions$.pipe(
        map(questions => questions.filter(question => questionIdList.includes(question.id))
      )).subscribe({
        next: data => { 
          this.selectedQuestions.set(data);
          //console.log('Selected questions', this.selectedQuestions());
                
          const qc: QuestionControl = this.getQuestionControl(this.selectedQuestions());
          //console.log('qc', qc);
          this.questionnaireForm = this.formBuilder.group(qc);
        }
      })
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  onSubmit(): void {

    //console.table(this.questionnaireForm.value);

    if(this.questionnaireForm.valid){
      const questionIdList: number[] = this.questionService.getRandomQuestionIds(idQuestionMin, idQuestionMax, nbQuestionsToSelect);
 
      this.selectedQuestions.set(this.questions().filter(question => questionIdList.includes(question.id)));
      //console.log('Selected questions', this.selectedQuestions());
      
      const qc: QuestionControl = this.getQuestionControl(this.selectedQuestions());
      //console.log('qc', qc)
      this.questionnaireForm = this.formBuilder.group(qc);
    }
  }


  getAllQuestions(): Observable<Question[]> {
    const questions$ = this.questionService.getAllQuestions();

    this.subscriptions.add(questions$.subscribe({
      next: data => { this.questions.set(data) }
    }));

    return questions$;
  }


  getQuestionControl(questions: Question[]): QuestionControl {
    const qc: QuestionControl = {};
    questions.forEach(question => {
      switch (question.type) {
        case 1: //Checkbox
          qc[`question${question.id}`] = new FormControl(false, {nonNullable: true});
          break;
        case 2: //Input
          qc[`question${question.id}`] = new FormControl('',[Validators.required, Validators.maxLength(10), Validators.pattern(regexPattern)]);
          break;
        case 3: //Select
          qc[`question${question.id}`] = new FormControl(question.answers[0]);
          break;
        default: //Input
          qc[`question${question.id}`] = new FormControl('',[Validators.required, Validators.maxLength(10), Validators.pattern(regexPattern)]);
          break;
      }
    });

    return qc;
  }


  showErrorMessage(controlName: string, errorCode: string): boolean {
    const control = this.questionnaireForm.controls[controlName];

    return control.hasError(errorCode) && (control.touched || control.dirty);
  }
}