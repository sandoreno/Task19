import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { lastValueFrom } from 'rxjs';
import { UserModel, GroupModelDTO, EventModel, EventInfoModel } from 'src/app/shared/models';
import { UserService, GroupService } from 'src/app/shared/services';
import { RegistryModal } from '../../shared/modals/registry-modal/registry.modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  public id: any;
  eventModel: EventModel = new EventModel;
  eventInfo: EventInfoModel = new EventInfoModel;
  public mas: any;
  visitHistory: any[];
  recomend: any[];
  public modalRef: NgbModalRef;
  condition: boolean = true;
  
  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private groupService: GroupService,
    private router: Router
  ){ }

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
      if(response){
        t.userService.setCredential(response);
        t.router.navigate(['catalog']);
      }
      else{
        t.userService.setCredential(-200);
        t.router.navigate(['tests']);
      }
    })
    .catch(ex => {
      console.log(ex)
    })
    .finally(()=>{
    })
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


}
