import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GroupService, UserService, FilterService, ModalService } from 'src/app/shared/services';
import { EventDays, EventFormat, EventTimes, EventDirection } from 'src/app/shared/constans';
import { EventInfoModel, EventModel, GroupModelDTO, FilterModel } from 'src/app/shared/models';
<<<<<<< HEAD
import { TabsComponent } from '../../shared/components/tabs/tabs.component';
=======
import { Router } from '@angular/router';
>>>>>>> main

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
<<<<<<< HEAD
  public userId = () => {
    let id;
    this.userService.credentials$.subscribe({ next(credentials) { id = credentials } });
    return id;
  }
=======
  public userId: () => number;

>>>>>>> main
  constructor(
    private groupService: GroupService,
    private userService: UserService, 
    private filterService: FilterService,
    private modalService: ModalService,
    private router: Router) { 
      let t = this;
      t.userId = () => {
        if(t.userService.credentials$){
          return t.userService.credentials$; //заглушка поправить
        }
        else{
          t.router.navigate(['dashboard'])
        }
        return 0;
      }
     }

  ngOnInit(): void {
    let t = this;
    t.eventModel.uniqueNumber = t.userId();
    //t.id = 101346559;
    //console.log(localStorage['id']);
    //t.eventModel.uniqueNumber = t.userId();
    //console.log(t.userId());
    t.eventModel.uniqueNumber = localStorage['idUser'];
    t.PostIdUser(t.eventModel, t.eventInfo);
    t.postFilter(t.filterModel);
  }

  public async PostIdUser(eventModel: EventModel, eventInfo: EventInfoModel) {
    let t = this;
    await lastValueFrom(this.groupService.RegisterEvent(eventModel, eventInfo))
      .then(response => {
        eventInfo = response;
        t.visitHistory = eventInfo.visitedGroups;
        t.recommendationGroups = eventInfo.scrobbleRecommendation;
      })
      .catch(ex => {
        console.log(ex);
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
    let t = this;
    await lastValueFrom(t.filterService.PostFilter(eventFilter))
      .then(response => {
      })
      .catch(ex => {
        t.modalService.showErrorModal(ex);
            })
      .finally(() => {
      })
  }

}


