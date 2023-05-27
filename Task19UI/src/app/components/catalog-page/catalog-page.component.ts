import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GroupService, UserService, FilterService, ModalService } from 'src/app/shared/services';
import { EventDays, EventFormat, EventTimes, EventDirection } from 'src/app/shared/constans';
import { EventInfoModel, EventModel, GroupModelDTO, FilterModel } from 'src/app/shared/models';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit {
  searchText: any;
  event: EventModel = new EventModel;
  groups: GroupModelDTO[] = [];
  eventModel: EventModel = new EventModel;
  eventInfo: EventInfoModel = new EventInfoModel;
  visitHistory: any[];
  recommendationGroups: any[];
  filterModel: FilterModel = new FilterModel;
  public eventFormat = EventFormat;
  public eventDays = EventDays;
  public eventTimes = EventTimes;
  public eventDirection = EventDirection;
  public userId: () => number;

  constructor(
    private groupService: GroupService,
    private userService: UserService, 
    private filterService: FilterService,
    private modalService: ModalService) { 
      let t = this;
      t.userId = () => {
        let id = 1;
        //t.userService.credentials$.subscribe({next(credentials) {id = credentials}} ); //заглушка поправить
        return id;
      }
     }

  ngOnInit(): void {
    let t = this;
    t.eventModel.uniqueNumber = t.userId();
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
          t.modalService.showErrorModal("АШИПЬКА")
      })
      .catch(ex => {
        console.log(ex)
      })
      .finally(() => {
      })
  }

}


