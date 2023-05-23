import { Injectable } from '@angular/core';
import { GroupModelDTO } from '../models/models';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class groupService {
  errorMessage: String = "HttpError";
 private url = "/group/";

  constructor(private http: HttpClient) { }

  public GetAllgroups() : Observable<GroupModelDTO[]> {
    return this.http.get<GroupModelDTO[]>(environment.apiUrl + this.url + "/getallgroups");
  }
}

