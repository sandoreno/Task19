import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']

})
export class CatalogPageComponent {
  works = [
    {id: 0, name: "Футбол"},
    {id: 1, name: "Баскетбол"},
    {id: 2, name: "Волейбол"}
  ];

  format = [
    {id: 0, name: "Очный"},
    {id: 1, name: "Дистант"},
  ];

  days = [
    {id: 0, name: "Понедельник"},
    {id: 1, name: "Вторник"},
    {id: 2, name: "Среда"},
    {id: 3, name: "Четверг"},
    {id: 4, name: "Пятница"},
    {id: 5, name: "Суббота"},
    {id: 6, name: "Воскресенье"},
  ];

  times = [
    {id: 0, name: "9:15"},
    {id: 1, name: "11:15"},
    {id: 2, name: "13:15"},
    {id: 3, name: "15:15"},
    {id: 4, name: "17:15"},
  ];

  itemSelected(e: any) {
    console.log(e);
  }
}


