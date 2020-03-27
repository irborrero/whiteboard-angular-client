import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
    findModulesForCourse = async (cid) => {
    const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/ramirezborrero.i/courses/:cid/modules`)
    return await response.json();
  }
}
