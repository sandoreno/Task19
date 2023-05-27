import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  credentials$: any;
  errorMessage: String = "HttpError";
  private url = "/getUser";

  setCredential(value: any) {
    var t = this;
    var credentialSubject = new BehaviorSubject<any>(value);
    t.credentials$ = credentialSubject.asObservable();
  }

  constructor(private http: HttpClient) { }

  public RegisterUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(environment.apiUrl + this.url, user);
  }
}

