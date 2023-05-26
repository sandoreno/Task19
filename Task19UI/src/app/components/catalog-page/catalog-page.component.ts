import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EventDays, EventFormat, EventTimes, EventDirection } from 'src/app/shared/constans';
import { EventInfoModel, EventModel, GroupModelDTO, FilterModel } from 'src/app/shared/models';
import { GroupService, FilterService } from 'src/app/shared/services';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit {
  searchText: any;
  event: EventModel = new EventModel;

  groups: GroupModelDTO[] = [];

  id: number; //Поправить id
  eventModel: EventModel = new EventModel;
  eventInfo: EventInfoModel = new EventInfoModel;
  visitHistory: any[];
  recommendationGroups: any[];

  filterModel: FilterModel = new FilterModel;


  public eventFormat = EventFormat;
  public eventDays = EventDays;
  public eventTimes = EventTimes;
  public eventDirection = EventDirection;

  constructor(private groupService: GroupService, private filterService: FilterService) {

  }
  ngOnInit(): void {
    let t = this;
    t.id = 101346559;
    t.eventModel.uniqueNumber = t.id;
    t.PostIdUser(t.eventModel, t.eventInfo);
    t.postFilter(t.filterModel);
  }

  public async PostIdUser(eventModel: EventModel, eventInfo: EventInfoModel) {
    //debugger
    let t = this;
    await lastValueFrom(this.groupService.RegisterEvent(eventModel, eventInfo))
      .then(response => {
        eventInfo = response
        t.visitHistory = eventInfo.visitedGroups
        t.recommendationGroups = eventInfo.scrobbleRecommendation
        console.log(t.recommendationGroups)
        console.log(t.visitHistory)
      })
      .catch(ex => {
        console.log(ex)
      })
      .finally(() => {
      })
  }

  //public async getAllGroups(event) {
  //  debugger
  //  let t = this;
  //  await lastValueFrom(t.groupService.RegisterEvent(event))
  //    .then(response => {
  //      t.event = response;
  //      console.log(t.event)
  //    })
  //    .catch(ex => {
  //      console.log(ex)
  //    })
  //    .finally(() => {
  //    })
  //}

  //получить все рекомендованные мероприятия по id юзера
  //  debugger;
  //  let t = this;
  //  await lastValueFrom(t.groupService.GetAllgroups())
  //    .then(response => {
  //      t.groups = response;
  //      console.log(t.groups)
  //    })
  //    .catch(ex => {
  //      console.log(ex)
  //    })
  //    .finally(() => {
  //    })
  //}

  works = [
    { id: 0, name: "Футбол" },
    { id: 1, name: "Баскетбол" },
    { id: 2, name: "Волейбол" }
  ];

  PostFilterBtn(searchValue: string) {
    let t = this;
    console.log(searchValue);
    t.filterModel.search = searchValue;
    console.log(t.filterModel);
    t.postFilter(t.filterModel);
  }

  public async postFilter(eventFilter: FilterModel) {
    //debugger
    let t = this;
    await lastValueFrom(t.filterService.PostFilter(eventFilter))
      .then(response => {
        console.log(response)
      })
      .catch(ex => {
        console.log(ex)
      })
      .finally(() => {
      })
  }

}


