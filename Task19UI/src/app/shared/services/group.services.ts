import { Injectable } from '@angular/core';
import { GroupModelDTO } from '../models/models';
import { UserModel } from 'src/app/shared/models';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  errorMessage: String = "HttpError";
  private url = "/group/";

  user: UserModel[] = []

  constructor(private http: HttpClient) { }

  public GetAllgroups(): Observable<GroupModelDTO[]> {
    return this.http.get<GroupModelDTO[]>(environment.apiUrl + this.url + "/getallgroups");
  }

  public PostUserModel() {
    return this.http.post(environment.apiUrl + this.url + "/postusermodel", this.user);
  }
}

