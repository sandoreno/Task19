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

  constructor(private groupService: GroupService){}

  question = [
    {id: 0, value: "Как назвать самца божьей коровки?"},
    {id: 1, value: "Почему бублики готовят с дырками?"},
    {id: 2, value: "Почему в сказке о репке только у собаки есть имя?"},
    {id: 3, value: "Почему девушки открывают рот, когда красят ресницы? "},
    {id: 4, value: "На чьей одежде в семье можно сэкономить? "},
    {id: 5, value: "Нужен ли поварской колпак лысому? "},
  ];

  public async getAllGroups() {
    let t = this;
    await lastValueFrom(t.groupService.GetAllgroups())
    .then(response => {
      t.groups = response;
    })
    .catch(ex => {
      console.log(ex)
    })
    .finally(()=>{
    })
  }
}

