import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EventDays, EventFormat, EventTimes } from 'src/app/shared/constans';
import { EventModel, GroupModelDTO } from 'src/app/shared/models';
import { GroupService } from 'src/app/shared/services';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit {
  searchText: any;
  event: EventModel = new EventModel;

  eventModels: EventModel[] = [];
  groups: GroupModelDTO[] = [];

  public eventFormat = EventFormat;
  public eventDays = EventDays;
  public eventTimes = EventTimes;

  constructor(private groupService: GroupService) {

  }
  ngOnInit(): void {
    //let t = this;
    //t.getAllGroups(t.eventModels)
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

  English_language = [
    {
      title: "Образование",
      name: "Английский язык",
      filters: ["Очный формат", "Группа занимается", "Запись продолжается"],
      address: "город Москва, улица Мусы Джалия, дом 25А",
      group: "G-02069387",
      day: "Вт",
      start_time: "11:35",
      end_time: "13:15"
    }
  ];

  Walk = [
    {
      title: "Здоровье",
      name: "Скандинавская ходьба",
      filters: ["Очный формат", "Группа занимается", "Запись окончена"],
      address: "город Москва, улица Мусы Джалия, дом 2В",
      group: "A-04067787",
      day: "Ср",
      start_time: "9:35",
      end_time: "10:15"
    }
  ]

  Drive = [
    {
      title: "Дополнительное образование",
      name: "Уроки вождения",
      filters: ["Очный формат", "Группа занимается", "Запись не начиналась"],
      address: "город Москва, улица Мусы Джалия, дом 17",
      group: "D-05586687",
      day: "Сб",
      start_time: "13:35",
      end_time: "14:35"
    }
  ]

  itemSelected(e: any) {
    console.log(e);
  }
}


