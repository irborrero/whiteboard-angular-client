import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = async (mid) => {
    const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/ramirezborrero.i/modules/:mid/lessons`)
    return await response.json();
  }
}
