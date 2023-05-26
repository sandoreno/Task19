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
  }

  public SendAnswers(questionModel: QuestionModel) : QuestionModel {
    return questionModel.level_id == 1 ? this.question_lvl_2 : this.question_lvl_3;
  }
  //   public GetQuestion() : Observable<QuestionModel> {
  //   return this.http.get<QuestionModel>(environment.apiUrl + this.url + '/getquestion');
  // }
  // public SendAnswers(questionModel: QuestionModel ) : Observable<QuestionModel> {
  //   return this.http.post<QuestionModel>(environment.apiUrl + this.url, questionModel);
  // }
  public answers_lvl_1: AnswerModel[] = [
    {
        answerText: "Игры",
        isChecked: false,
        id: 1
    },
    {
        answerText: "Образование",
        isChecked: false,
        id: 2
    },
    {
        answerText: "Пение",
        isChecked: false,
        id: 3
    },
    {
        answerText: "Рисование",
        isChecked: false,
        id: 4
    },
    {
        answerText: "Физическая активность",
        isChecked: false,
        id: 5
    },
    {
        answerText: "Танцы",
        isChecked: false,
        id: 6
    },  
    { 
        answerText: "Спецпроект / Интеллектуальный клуб",
        isChecked: false,
        id: 7
    },  
    { 
        answerText: "Спецпроект / Московский театрал",
        isChecked: false,
        id: 8
    },
  ]
  public question_lvl_1: QuestionModel = {
    questionText: 'Выберите категории, которые вам интересны:',
    answers: this.answers_lvl_1,
    level_id: 1
  }

  public answers_lvl_2: AnswerModel[] = [
    {
        answerText: "Интеллектуальные игры",
        isChecked: false,
        id: 1
    },
    {
        answerText: "Настольные игры",
        isChecked: false,
        id: 2
    },
    {
        answerText: "ОНЛАЙН Интеллектуальные игры",
        isChecked: false,
        id: 3
    },
    {
        answerText: "ОНЛАЙН Настольные игры",
        isChecked: false,
        id: 4
    },
    {
        answerText: "Шахматы и шашки",
        isChecked: false,
        id: 5
    },
    {
        answerText: "Здорово жить",
        isChecked: false,
        id: 6
    },  
    { 
        answerText: "Иностранные языки",
        isChecked: false,
        id: 7
    },  
    { 
        answerText: "Финансовая и правовая грамотность, личная безопасность",
        isChecked: false,
        id: 8
    },
    { 
      answerText: "История, искусство, краеведение",
      isChecked: false,
      id: 9
  },
  { 
    answerText: "Киберспорт",
    isChecked: false,
    id: 10
},
{ 
  answerText: "ОНЛАЙН Английский язык",
  isChecked: false,
  id: 11
},
{ 
  answerText: "ОНЛАЙН Здорово жить",
  isChecked: false,
  id: 12
},
{ 
  answerText: "ОНЛАЙН Информационные технологии",
  isChecked: false,
  id: 13
},
{ 
  answerText: "ОНЛАЙН История, искусство, краеведение",
  isChecked: false,
  id: 14
},
{ 
  answerText: "ОНЛАЙН Образовательный практикум",
  isChecked: false,
  id: 15
},
  ]
  public question_lvl_2: QuestionModel = {
    questionText: 'Выберите категории, которые вам интересны:',
    answers: this.answers_lvl_2,
    level_id: 2
  }

  public answers_lvl_3: AnswerModel[] = [
    {
        answerText: "Иные интеллектуальные игры",
        isChecked: false,
        id: 1
    },
    {
        answerText: "Викторины",
        isChecked: false,
        id: 2
    },
    {
        answerText: "Квест",
        isChecked: false,
        id: 3
    },
    {
        answerText: "Брейн-ринг",
        isChecked: false,
        id: 4
    },
    {
        answerText: "Современные настольные игры",
        isChecked: false,
        id: 5
    },
    {
        answerText: "Иные настольные игры",
        isChecked: false,
        id: 6
    },  
    { 
        answerText: "Русское лото",
        isChecked: false,
        id: 7
    },  
    { 
        answerText: "Шашки",
        isChecked: false,
        id: 8
    },
    { 
      answerText: "Шахматы",
      isChecked: false,
      id: 9
    },
    { 
      answerText: "Английский язык разговорный",
      isChecked: false,
      id: 10
    },
    { 
      answerText: "Английский язык",
      isChecked: false,
      id: 11
    },
    { 
      answerText: "Английский язык для начинающих",
      isChecked: false,
      id: 12
    },
    { 
      answerText: "Правильное питание",
      isChecked: false,
      id: 13
    },
    { 
      answerText: "Здорово жить",
      isChecked: false,
      id: 14
    },
    { 
      answerText: "Иппотерапия",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Здоровый образ жизни (ЗОЖ)",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Здоровый сон",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Здоровое похудение",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Арабский язык",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Арабский язык продвинутый курс",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Испанский язык",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Итальянский язык",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Французский язык продвинутый курс",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Французский язык",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Японский язык продвинутый курс",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Иные иностранные языки",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Немецкий язык",
      isChecked: false,
      id: 15
    },
    { 
      answerText: "Турецкий язык",
      isChecked: false,
      id: 15
    },
  ]
  public question_lvl_3: QuestionModel = {
    questionText: 'Выберите категории, которые вам интересны:',
    answers: this.answers_lvl_3,
    level_id: 3
  }
}

