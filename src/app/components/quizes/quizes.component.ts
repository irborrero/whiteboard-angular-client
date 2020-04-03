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
    {
      _id: '',
      title: '',
      attempts: [{score: ''}]
    }
  ]


  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute) { }

  setup = (quizzes) => {
    this.quizzes = quizzes;
    this.quizzes.forEach(quiz => {
        fetch(`http://localhost:3000/api/quizzes/${quiz._id}/attempts`)
          .then(response => response.json())
            .then(attempts => quiz.attempts = attempts);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.service.findAllQuizzes()
        .then(quizzes => this.setup(quizzes));
    });
  }


}
