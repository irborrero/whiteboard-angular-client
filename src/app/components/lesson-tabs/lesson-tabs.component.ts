import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../../services/LessonServiceClient";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  courseId = ''
  moduleId = ''
  lessonId = ''
  lessons = [
    {_id: '', title: ''}
  ]
  constructor(
    private service: LessonServiceClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.courseId = params.cid;
        this.moduleId = params.mid;
        this.lessonId = params.lid;
        this.service.findLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons)
      });
  }

}
