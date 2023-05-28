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
    public lvl3Answers: number[] = [];
    public setAnswers(answers: number[]){
        this.lvl3Answers  = answers;
    }

    public getAnswers(){
        return this.lvl3Answers;
    }
  constructor(private http: HttpClient) { }

  public GetGroupsByVector(answers: TestResponseModel): Observable<VectorResponseModel> {
    return this.http.post<VectorResponseModel>(environment.apiUrl + '/vector', answers);
  }
}

