import { Injectable } from '@angular/core';
import { GroupModelDTO } from '../models/models';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class groupService {
  errorMessage: String = "HttpError";
 private url = "group";

  constructor(private http: HttpClient) { }

  public GetAllgroups() : Observable<GroupModelDTO[]> {
    return this.http.get<GroupModelDTO[]>(`${environment.apiUrl}/${this.url}`);

    //catchError(err => {
    //  console.log(err);
    //  this.errorMessage = err.message;
    //  return[];
    //})
  };
}
