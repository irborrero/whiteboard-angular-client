import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (quizId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/ramirezborrero.i/quizes/${quizId}/questions`)
      .then(response => response.json())
}
