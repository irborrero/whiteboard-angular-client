import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizServiceClient} from "../../services/QuizServiceClient";

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  courseId = ''
  quizzes = [
    { _id: '', title: '' }
  ]

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    });
  }


}
