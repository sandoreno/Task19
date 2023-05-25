import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GroupModelDTO } from 'src/app/shared/models';
import { QuestionModel } from 'src/app/shared/models/question.model';
import { GroupService } from 'src/app/shared/services';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss']
})
export class TestsPageComponent {
  questionModel: QuestionModel;

  constructor(private testService: TestService){}

  public async getQuestion() {
   let t = this;
   t.questionModel = t.testService.GetQuestion()
  }
}

