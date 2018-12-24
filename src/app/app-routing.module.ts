import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppStartupComponent } from './appstartup.component';


const routes: Routes = [
  {
    path: '',
      children: [
       {
         path: '',
         component: AppStartupComponent,
       },
       {
         path: 'pictures',
         loadChildren: './quiz-4pictures/pictures.module#PicturesModule',
       }
      ]
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
