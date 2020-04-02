import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: '', correct: ''}

  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>()

  grading = false

  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  grade = () => { this.grading = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
