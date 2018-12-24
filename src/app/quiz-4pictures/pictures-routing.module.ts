import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppQuizComponent } from './core/app-quiz.component';
import { QuizLooseComponent }  from './core/quiz-loose.component';
import { QuizWinComponent }       from './core/quiz-win.component';
import { QuizGameComponent }  from './core/quiz-game.component';


const routes: Routes = [
  {
    path: '',
    component: AppQuizComponent,
    children: [
      {
        path: '',
        component: QuizGameComponent 
      },
      {
        path: 'loose',
        component: QuizLooseComponent /*Play again */
      },
      {
        path: 'win',
        component: QuizWinComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicturesRoutingModule { }
