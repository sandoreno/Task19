import { Injectable } from '@angular/core';
import { GroupModelDTO } from '../models/group.model';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  errorMessage: String = "HttpError";
 private url = "/getUser";

  constructor(private http: HttpClient) { }

  public RegisterUser(user: UserModel) : Observable<UserModel> {
    return this.http.post<UserModel>(environment.apiUrl + this.url, user);
  }
}

