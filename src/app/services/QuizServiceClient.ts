import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findQuizesForCourse = (cid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/ramirezborrero.i/quizes`)
      .then(response => response.json())
}
