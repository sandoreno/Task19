import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GroupModelDTO } from './shared/models/models';
import { groupService } from './shared/services/group.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [groupService]
})
export class AppComponent implements OnInit {
  title = 'Task19UI';

  groups: GroupModelDTO[] = [];
  //error:any;

  constructor(private groupService: groupService) { }

  ngOnInit(): void {
    let t = this;
    // t.getAllGroups()

  }

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
