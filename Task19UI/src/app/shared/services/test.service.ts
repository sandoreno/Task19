import { Injectable } from '@angular/core';
import { GroupModelDTO } from '../models/group.model';
import { environment } from 'src/enviroments/enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models';
import { QuestionModel } from '../models/question.model';
import { AnswerModel } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 private url = "/test";

  constructor(private http: HttpClient) { }

  public GetQuestion() : QuestionModel {
    return this.question_lvl_1;
    // return this.http.post<UserModel>(environment.apiUrl + this.url, user);
  }
  public answers_lvl_1: AnswerModel[] = [
    {
        answerText: "Для тела",
        isChecked: false,
        id: 1
    },
    {
        answerText: "Для ума",
        isChecked: false,
        id: 2
    },
    {
        answerText: "Для души",
        isChecked: false,
        id: 3
    },
    {
        answerText: "Для души",
        isChecked: false,
        id: 3
    },
  ]
  public question_lvl_1: QuestionModel = {
    questionText: 'Выберите категорию:',
    answers: this.answers_lvl_1,
    level_id: 1
  }
}

