import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { AppSettings } from '../app.custom.settings';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) {}

  /**
   * Retourne toutes les questions
   * @returns Un tableau d'observable de questions
   */
  getAllQuestions(): Observable<Question[]> {
    const questions$ = this.httpClient.get<Question[]>(AppSettings.API_END_POINTS.QUESTIONS);
    return questions$;
  }

 
  /**
   * Retourne un nombre entier aléatoire compris entre min et max
   * @param min Le nombre minimum
   * @param max Le nombre maximum
   * @returns Un nombre entier compris entre min et max
   */
  getRandomInt(min:number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  /**
   * Retourne une liste aléatoire de questionId compris entre idMin et idMax
   * @param idMin Id minimum d'une question
   * @param idMax Id maximum d'une question
   * @param nbQuestionsToSelect Nombre de questions à sélectionner (compris entre idMin et idMax)
   * @returns Les Id des questions sélectionnées
   */
  getRandomQuestionIds(idMin:number, idMax: number, nbQuestionsToSelect: number): number[] {
    let questionIdsArray: number[] = [];
    let questionId: number;

    for (let i = 0; i < nbQuestionsToSelect; i++) {

      questionId = this.getRandomInt(idMin,idMax);

      while (questionIdsArray.includes(questionId)) {
        questionId = this.getRandomInt(idMin,idMax);
      }

      questionIdsArray.push(questionId);
    }

    return questionIdsArray;
  }
}