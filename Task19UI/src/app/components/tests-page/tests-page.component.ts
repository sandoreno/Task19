import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { QuestionModel } from 'src/app/shared/models/question.model';
import { TestService } from 'src/app/shared/services/test.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/services';
import { AvailableAnswerCount } from 'src/app/shared/constans';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss']
})
export class TestsPageComponent implements OnInit{
  questionModel: QuestionModel;
  getAvailableAnswerCount: () => number;
  getCheckedCount: () => number;

  constructor(
    private testService: TestService,
    private router: Router,
    private modalService: ModalService
    ){
      let t = this;
      t.getAvailableAnswerCount = () => {
        let result = AvailableAnswerCount.find(element => element.level_id == this.questionModel.level_id);
        return result.answerCount ?? 3;
      }
      t.getCheckedCount = () => {
        let result = t.questionModel.answers.filter(elem => elem.isChecked).length;
        return result;
      }
    }
  ngOnInit(): void {
    this.getQuestion();
  }

  public async getQuestion() {
   let t = this;
   t.questionModel = t.testService.GetQuestion()
  }

  public async sendAnswer(){
    let t = this;
    if(t.questionModel.level_id == 3){
      t.router.navigate(['catalog']);
      return;
    }
    let questionToSend = t.questionModel;
    questionToSend.answers = t.questionModel.answers.filter(elem => elem.isChecked);
    if(questionToSend.answers.length > t.getAvailableAnswerCount()){
      t.modalService.showErrorModal("Выберите меньшее количество категорий")
    }
    t.questionModel = t.testService.SendAnswers(questionToSend);
  }

  public isDisabled(): boolean{
    let t = this;
    return t.questionModel.answers.filter(elem => elem.isChecked).length >= t.getAvailableAnswerCount();
  }
}

