import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventInfoModel, TestResponseModel, UserModel } from '../models';
import { VectorResponseModel } from '../models/vectorResponse.model';

@Injectable({
  providedIn: 'root'
})
export class VectorService {
  constructor(private http: HttpClient) { }

  public setAnswers(answers: number[]){
    sessionStorage.setItem('lvl3answers', JSON.stringify(answers));
  }

  public getAnswers(){
    return JSON.parse(sessionStorage.getItem('lvl3answers'));
  }

  public clearAnswers(){
    sessionStorage.removeItem('lvl3answers');
  }

  public GetGroupsByVector(answers: TestResponseModel): Observable<VectorResponseModel> {
    return this.http.post<VectorResponseModel>(environment.apiUrl + '/vector', answers);
  }
}

