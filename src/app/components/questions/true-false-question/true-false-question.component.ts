import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '',  correct: ''}

  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>()

  grading = false;
  submitted = false;

  submitAnswer = () => {
    this.answerChange.emit(this.answer);
    this.submitted = true;
  }
  grade = () => { this.grading = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
