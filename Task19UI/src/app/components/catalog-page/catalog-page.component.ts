import { group } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { elementAt, lastValueFrom } from 'rxjs';
import { GroupService, UserService, FilterService, ModalService, VectorService } from 'src/app/shared/services';
import { EventDays, EventFormat, EventTimes, EventDirection } from 'src/app/shared/constans';
import { EventInfoModel, EventModel, GroupModelDTO, FilterModel, TestResponseModel } from 'src/app/shared/models';
import { Router } from '@angular/router';
import { EventDirectionType, EventFormatType, EventTimesType } from 'src/app/shared/enums';

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
  public eventFormat= EventFormat;
  public eventDays = EventDays;
  public eventTimes = EventTimes;
  public eventDirection = EventDirection;
  public userId: () => number;

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private filterService: FilterService,
    private modalService: ModalService,
    private router: Router,
    private vectorService: VectorService) {
    let t = this;
    if(!t.userService.getCredential()){
      t.router.navigate(['dashboard'])
    }
    t.userId = () => {
        return +t.userService.getCredential(); //заглушка поправить
    }
  }

  loader = true;

  ngOnInit(): void {
    let t = this;
    t.eventModel.uniqueNumber = t.userId();
    if(!t.userId()){
      t.PostIdUser();
    }
    else{
      let answers = JSON.parse(sessionStorage.getItem('lvl3answers'));
      let vectorAnswers:  TestResponseModel = {
        questionId: 3,
        answerId: answers
      };
      t.getGroupsByVector(vectorAnswers)
    }
  }

  public async PostIdUser() {
    let t = this;
    await lastValueFrom(this.groupService.RegisterEvent(t.eventModel))
      .then(response => {
        t.eventInfo = response;
        t.visitHistory = response.visitedGroups;
        t.recommendationGroups = response.scrobbleRecommendation;
        t.getByFilter()
      })
      .catch(ex => {
        console.log(ex);
      })
      .finally(() => {
      })
  }

  PostFilterBtn() {
    let t = this;
    t.getByFilter();
  }

  public async getByFilter() {
    let t = this;
    let result = t.eventInfo.visitedGroups; 
    if(t.filterModel.direction != EventDirectionType.default){
      //result = result.filter(elem => elem.DirectionOne == t.filterModel.direction)
    }
    if(t.filterModel.search){
      let searchTextLow = t.filterModel.search.toLowerCase();
      result = result.filter(elem => 
        elem.DirectionOne.toLowerCase().indexOf(searchTextLow) != -1
      || elem.DirectionTwo.toLowerCase().indexOf(searchTextLow) != -1
      || elem.DirectionThree.toLowerCase().indexOf(searchTextLow) != -1);
    }
    if(t.filterModel.time != EventTimesType.default){
      let searchTime = t.filterModel.time;
      result = result.filter(elem => elem.ActivePeriod.indexOf(searchTime.toString()) != -1)
    }
    if(t.filterModel.format != EventFormatType.default){
      let searchTextLow = t.eventFormat.find(elem=> elem.value == t.filterModel.format).label.toLowerCase();
      result = result.filter(elem => 
        elem.DirectionOne.toLowerCase().indexOf(searchTextLow) != -1
      || elem.DirectionTwo.toLowerCase().indexOf(searchTextLow) != -1
      || elem.DirectionThree.toLowerCase().indexOf(searchTextLow) != -1);
    }
    t.visitHistory = result;
    // await lastValueFrom(t.filterService.PostFilter(eventFilter))
    //   .then(response => {
    //   })
    //   .catch(ex => {
    //     t.modalService.showErrorModal("Не могу получить группы по фильтру");
    //   })
    //   .finally(() => {
    //   })
  }

  public async getGroupsByVector(vectorAnsers: TestResponseModel){
    let t = this;
    await lastValueFrom(t.vectorService.GetGroupsByVector(vectorAnsers))
    .then(response => {
      t.visitHistory = response.vectorRec;
      t.recommendationGroups = response.newRec;
    })
    .catch(ex => {
      t.modalService.showErrorModal("Не могу получить группы по вектору")
    })
  }
}


