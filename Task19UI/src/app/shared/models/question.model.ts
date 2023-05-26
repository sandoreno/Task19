import { AnswerModel } from "./answer.model";

export class QuestionModel{
    level_id: number;
    questionText: string = "";
    answers: AnswerModel[] = [];
  }
  