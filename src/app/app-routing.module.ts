import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '4pictures',
    loadChildren: './4pictures/quiz.module#QuizModule'
  },
  {
    path: '6pictures',
    loadChildren: './6pictures/quiz.module#QuizModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes/*, { enableTracing: true }*/)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
