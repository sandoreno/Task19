import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GroupModelDTO } from 'src/app/shared/models';
import { GroupService } from 'src/app/shared/services';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss']
})
export class TestsPageComponent {
  groups: GroupModelDTO[] = [];
  isChecked: boolean = false;

  constructor(private groupService: GroupService){}

  questions = [
    { id: 0, value: "Прикладное творчество" },
    { id: 1, value: "Клубная деятельность" },
    { id: 2, value: "Игры" },
    { id: 3, value: "Физическая активность" },
    { id: 4, value: "Образование" },
  ];

  //public async getAllGroups() {
  //  let t = this;
  //  await lastValueFrom(t.groupService.GetAllgroups())
  //  .then(response => {
  //    t.groups = response;
  //  })
  //  .catch(ex => {
  //    console.log(ex)
  //  })
  //  .finally(()=>{
  //  })
  //}
}

