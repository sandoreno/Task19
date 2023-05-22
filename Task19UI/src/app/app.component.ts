import { Component, OnInit } from '@angular/core';
import { GroupModelDTO } from './models/models';
import { groupService } from './services/http.services';

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
    this.groupService
      .GetAllgroups()
      .subscribe((result: GroupModelDTO[]) => (this.groups = result));
  }
}
