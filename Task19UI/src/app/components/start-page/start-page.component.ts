import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { lastValueFrom } from 'rxjs';
import { UserModel } from 'src/app/shared/models';
import { UserService } from 'src/app/shared/services';
import { RegistryModal } from '../../shared/modals/registry-modal/registry.modal';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  public id: any;
  public modalRef: NgbModalRef;
  condition: boolean = true;
  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ){}
  toggle() {
    this.condition = !this.condition;
  }

  show() {
    this.condition = false;
  }

  events_education = [
    {
      name: ["Пеший лекторий", "Английскай язык", "Шахматы и шашки"],
      status: ["", "ОНЛАЙН"]
    },
  ];
  events_heal = [
    {
      name: ["Скандинаская ходьба", "Суставная гимнастика", "Оздоровительная гимнастика"],
      status: ["", "ОНЛАЙН"]
    },
  ];
  events_creative = [
    {
      name: ["Мастер-класс по уходу за кожей в зрелом возрасте", "Рисование", "Пение"],
      status: ["", "ОНЛАЙН"]
    },
  ];
  events_specially = [
    {
      name: ["Московский театрал", "Секреты добрососедства", "Психологические тренинги"],
      status: ["", "ОНЛАЙН"]
    },
  ];

  public async ShowRegistryModal() {
    let t = this;

    // todo: вывести инфу о комиссии сети в модалке подтверждения
    t.modalRef = t.modalService.open(RegistryModal,
      {
        modalDialogClass: 'main-modal-custom',
        centered: true,
        size: 'lg',
        windowClass: 'super-modal-delete-users very-nice-shadow',
        animation: true
      });
    t.modalRef
      .result.then((result) => {
        if (result) {
          //записываем полученное значение из модалки
          t.registerUser(result);
        }
      });
  }

  public async registerUser(user: UserModel){
    let t = this;
    await lastValueFrom(t.userService.RegisterUser(user))
    .then(response => {
      t.id = response;
      console.log(t.id)
    })
    .catch(ex => {
      console.log(ex)
    })
    .finally(()=>{
    })
  }

}
