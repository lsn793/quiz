import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pictures',
    loadChildren: './quiz-4pictures/pictures.module#PicturesModule',
  },
  {
    path: '6pictures',
    loadChildren: './quiz-6pictures/pictures.module#PicturesModule',
  },
  {
    path: '',
    redirectTo: '/6pictures',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
