import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from 'src/app/shared/models';
import { RegistryModal } from '../../shared/modals/registry-modal/registry.modal';
import { GroupService } from 'src/app/shared/services';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  forFuture: any
  public modalRef: NgbModalRef | undefined;
  public user: UserModel = new UserModel;
  constructor(
    private modalService: NgbModal,
    private groupService: GroupService
  ) {}

  public async ShowRegistryModal() {
    let t = this;

    // todo: вывести инфу о комиссии сети в модалке подтверждения
    t.modalRef = t.modalService.open(RegistryModal,
      {
        modalDialogClass: 'main-modal-custom',
        centered: true,
        size: 'lg',
        windowClass: 'super-modal-delete-users very-nice-shadow',
        animation: true,
      });

    t.modalRef
      .result.then((result) => {
        if (result) {
          //записываем полученное значение из модалки
          t.user = result;
        }
      });
  }

  public async postUserModel() {

    let t = this;
    await lastValueFrom(t.groupService.PostUserModel())
    .then(response => {
      t.forFuture = response;
    })
    .catch(ex => {
      console.log(ex)
    })
    .finally(()=>{
    })
  };

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
}
