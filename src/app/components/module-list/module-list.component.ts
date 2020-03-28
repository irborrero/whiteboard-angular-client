import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from "../../services/ModuleServiceClient";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  courseId = ''
  moduleId  = ''
  modules: [
    {_id: '', title: ''}
  ]

  constructor(
    private route: ActivatedRoute,
    private service: ModuleServiceClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.courseId = params.cid;
        this.moduleId = params.mid;
        this.service.findModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);
      });
  }
}
