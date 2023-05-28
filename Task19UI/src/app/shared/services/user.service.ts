import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  credentials$: number;
  errorMessage: String = "HttpError";

  setCredential(value: any) {
    sessionStorage.setItem('userId', value);
  }

  getCredential(){
    return sessionStorage.getItem('userId');
  }

  clearCredential(){
    sessionStorage.removeItem('userId');
  }
  
  constructor(private http: HttpClient) { }

  public RegisterUser(user: UserModel): Observable<number> {
    return this.http.post<number>(environment.apiUrl + '/getUser', user);
  }
}

