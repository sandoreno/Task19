import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TestModel } from 'src/app/shared/models/test.model';
import { TestService } from 'src/app/shared/services/test.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/services';
import { AvailableAnswerCount } from 'src/app/shared/constans';
import { TestResponseModel } from 'src/app/shared/models';
import { QuestionModel } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss']
})
export class TestsPageComponent implements OnInit{
  testModel: TestModel;
  answerModel: TestResponseModel = {
    questionId: 1,
    answerId: []
  }
  getAvailableAnswerCount: () => number;
  getCheckedCount: () => number;

  constructor(
    private testService: TestService,
    private router: Router,
    private modalService: ModalService
    ){
      let t = this;
      t.getAvailableAnswerCount = () => {
        let result = AvailableAnswerCount.find(element => element.level_id == this.testModel.question.questionId);
        return result.answerCount ?? 3;
      }
      t.getCheckedCount = () => {
        let result = t.testModel.answerModels.filter(elem => elem.isChecked).length;
        return result;
      }
    }
  ngOnInit(): void {
    this.getQuestion();
  }

  public async getQuestion() {
   let t = this;
   await lastValueFrom(t.testService.SendAnswer(t.answerModel))
   .then(response => {
    t.testModel = response;
   })
   .catch(ex => {
    t.modalService.showErrorModal(ex)
   })
  }

  public async sendAnswer(){
    let t = this;
    if(t.testModel.question.questionId == 3){
      t.router.navigate(['catalog']);
      return;
    }
    if(t.getCheckedCount() > t.getAvailableAnswerCount()){
      t.modalService.showErrorModal("Выберите меньшее количество категорий")
    }
    t.answerModel.answerId = [];
    t.testModel.answerModels.forEach(answer => {
      if(answer.isChecked){
        t.answerModel.answerId.push(answer.id);
      }
    });
    t.answerModel.questionId++;
    t.getQuestion();
  }

  public isDisabled(): boolean{
    let t = this;
    return t.testModel.answerModels.filter(elem => elem.isChecked).length >= t.getAvailableAnswerCount();
  }
}

