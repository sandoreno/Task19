import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TestModel } from 'src/app/shared/models/test.model';
import { TestService } from 'src/app/shared/services/test.service';
import { Router } from '@angular/router';
import { ModalService, UserService, VectorService } from 'src/app/shared/services';
import { AvailableAnswerCount } from 'src/app/shared/constans';
import { TestResponseModel } from 'src/app/shared/models';
import { QuestionModel } from 'src/app/shared/models/question.model';
import { AnswerModel } from 'src/app/shared/models/answer.model';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss']
})
export class TestsPageComponent implements OnInit{
  testModel: TestModel = new TestModel;
  answerModel: TestResponseModel = {
    questionId: 1,
    answerId: []
  }

  isError: boolean = false;

  loader: true;

  getAvailableAnswerCount: () => number;
  getCheckedCount: () => number;

  constructor(
    private testService: TestService,
    private router: Router,
    private modalService: ModalService,
    private vectorService: VectorService,
    private userService: UserService
    ){
      let t = this;
      if(!t.userService.getCredential()){
        t.router.navigate(['dashboard'])
      }
      t.getAvailableAnswerCount = () => {
        let result = AvailableAnswerCount.find(element => element.level_id == t.testModel.question.questionId);
        if(t.testModel.answerModels.length < result.answerCount){
          result.answerCount = t.testModel.answerModels.length;
        }
        return result.answerCount;
      }
      t.getCheckedCount = () => {
        let result = t.testModel.answerModels.filter(elem => elem.isChecked).length;
        return result;
      }
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
    t.testModel.answerModels.forEach(e => e.isChecked = false)
   })
   .catch(ex => {
     t.modalService.showErrorModal("Не удалось загрузить тест !")
        t.isError = true;
   })
  }

  public async sendAnswer() {
    let t = this;
    if(t.getCheckedCount() > t.getAvailableAnswerCount()){
      t.modalService.showErrorModal("Выберите меньшее количество категорий");
      return;
    }
    t.answerModel.answerId = [];
    t.testModel.answerModels.forEach(answer => {
      if (answer.isChecked) {
        t.answerModel.answerId.push(answer.id);
      }
    });
    if(t.testModel.question.questionId === 3){
      t.vectorService.setAnswers(t.answerModel.answerId)
      t.router.navigate(['catalog']);
      return;
    }
    t.answerModel.questionId++;
    t.getQuestion();
  }

  public isDisabled(): boolean {
    let t = this;
    return t.testModel.answerModels.filter(elem => elem.isChecked).length >= t.getAvailableAnswerCount();
  }

  public toggleCheckbox(answer: AnswerModel){
    let t = this;
    if(t.isDisabled() && !answer.isChecked) return;
    t.testModel.answerModels.find(e => e.answer === answer.answer).isChecked = !answer.isChecked;
  }
}

