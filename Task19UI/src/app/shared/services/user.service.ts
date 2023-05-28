import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
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
    var t = this;
    //var credentialSubject = new BehaviorSubject<any>(value);
    t.credentials$ = value;
  }

  public getId(){
    return this.credentials$;
  }
  constructor(private http: HttpClient) { }

  public RegisterUser(user: UserModel): Observable<number> {
    return this.http.post<number>(environment.apiUrl + '/getUser', user);
  }
}

