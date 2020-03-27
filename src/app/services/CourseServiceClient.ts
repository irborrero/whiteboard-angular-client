import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/ramirezborrero.i/courses')
      .then(response => response.json())
    findCourseById = async (cid) => {
      const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/ramirezborrero.i/courses/:cid`)
      return await response.json();
    }
}
