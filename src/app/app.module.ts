import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { HomeComponent } from './components/home/home.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from "./services/ModuleServiceClient";
import {LessonServiceClient} from "./services/LessonServiceClient";
import { QuizesComponent } from './components/quizes/quizes.component';
import {QuizServiceClient} from "./services/QuizServiceClient";
import { QuizComponent } from './components/quiz/quiz.component';
import {QuestionServiceClient} from "./services/QuestionServiceClient";
import { MultipleChoiceQuestionComponent } from './components/questions/multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './components/questions/true-false-question/true-false-question.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    HomeComponent,
    QuizesComponent,
    QuizComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
