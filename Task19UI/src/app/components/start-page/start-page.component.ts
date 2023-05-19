import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  events = [
    {id: 0, name: "Пеший лекторий"},
    {id: 1, name: "Английскай язык"},
    {id: 2, name: "Шахматы и шашки"},
    {id: 3, name: "Скандинаская ходьба"},
    {id: 4, name: "ОНЛАЙН Суставная гимнастика"},
    {id: 5, name: "ОНЛАЙН Оздоровительная гимнастика"},
    {id: 6, name: "ОНЛАЙН Мастер-класс по уходу за кожей в зрелом возрасте"},
    {id: 7, name: "Рисование"},
    {id: 8, name: "Пение"},
    {id: 9, name: "Московский театрал"},
    {id: 10, name: "Секреты добрососедства"},
    {id: 11, name: "ОНЛАЙН Психологические тренинги"},
  ];

  online = [
    {id: 0, name: "ОНЛАЙН"},
    {id:1, name: ""}
  ];

  
}
