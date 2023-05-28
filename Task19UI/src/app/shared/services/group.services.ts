import { Injectable } from '@angular/core';
import { GroupModelDTO } from '../models/group.model';
import { EventModel } from '../models/event.model';
import { environment } from 'src/enviroments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventInfoModel } from '../models/eventsInfo.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  errorMessage: String = "HttpError";
 private url = "/getGroups";

  constructor(private http: HttpClient) { }

  //public GetAllgroups() : Observable<GroupModelDTO[]> {
  //  return this.http.get<GroupModelDTO[]>(environment.apiUrl + this.url);
  //}

  //public GetAllevents() : Observable<EventModel[]> {
  //  return this.http.get<EventModel[]>(environment.apiUrl + this.url);
  //}

  public RegisterEvent(event: EventModel, eventInfo:EventInfoModel) : Observable<EventInfoModel> {
    return this.http.post<EventInfoModel>(environment.apiUrl + this.url, event);
  }
}

