import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  events_education = [
    { name: ["Пеший лекторий","Английскай язык","Шахматы и шашки"] ,
     status: ["","ОНЛАЙН"] },
  ];
  events_heal = [
    { name: ["Скандинаская ходьба", "Суставная гимнастика", "Оздоровительная гимнастика"] ,
     status: ["","ОНЛАЙН"] },
  ];
  events_creative = [
    { name: ["Мастер-класс по уходу за кожей в зрелом возрасте", "Рисование", "Пение"] ,
     status: ["","ОНЛАЙН"] },
  ];
  events_specially = [
    { name: ["Московский театрал", "Секреты добрососедства","Психологические тренинги"] ,
     status: ["","ОНЛАЙН"] },
  ];
}
