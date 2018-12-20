import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent
  },
  {
    path: 'service',
    loadChildren: './services/flags/services.module#ServicesModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
