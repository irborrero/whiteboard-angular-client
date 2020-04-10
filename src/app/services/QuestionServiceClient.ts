import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://nodes-server-hw9.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
