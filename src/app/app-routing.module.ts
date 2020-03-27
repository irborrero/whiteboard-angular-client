import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'table/courses', component: CourseTableComponent},
    {path: ':layout/courses/:cid/modules', component: CourseViewerComponent},
    {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
