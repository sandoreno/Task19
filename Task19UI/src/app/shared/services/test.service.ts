import { Injectable } from '@angular/core';
import { GroupModelDTO } from '../models/group.model';
import { environment } from 'src/enviroments';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TestResponseModel, UserModel } from '../models';
import { TestModel } from '../models/test.model';
import { AnswerModel } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 url = "api/test";

  constructor(private http: HttpClient) { }

  public SendAnswer(answer: TestResponseModel) : Observable<TestModel> {
    return this.http.post<TestModel>(environment.apiUrl  + '/getTest', answer);
  }
}

