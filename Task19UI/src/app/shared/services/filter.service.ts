import { Injectable } from '@angular/core';
import { GroupModelDTO } from '../models/group.model';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilterModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  errorMessage: String = "HttpError";
 private url = "/getUser";

  constructor(private http: HttpClient) { }

  public PostFilter(filter: FilterModel) : Observable<FilterModel> {
    return this.http.post<FilterModel>(environment.apiUrl + this.url, filter);
  }
}

