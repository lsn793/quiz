import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppQuizComponent } from './core/app-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: AppQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicturesRoutingModule { }
