import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { ListExamComponent } from './list-exam/list-exam.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'novo', component: ExamComponent },
  { path: 'exames', component: ListExamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
