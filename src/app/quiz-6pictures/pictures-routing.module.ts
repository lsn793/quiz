import { NgModule } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { AppQuizComponent }       from './core/app-quiz.component';
import { QuizGameComponent }      from './core/quiz-game.component';


const routes: Routes = [
  {
    path: '',
    component: AppQuizComponent,
    children: [
      {
        path: '',
        component: QuizGameComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicturesRoutingModule { }
