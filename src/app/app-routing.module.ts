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
  /*{
    path: 'pictures',
    loadChildren: './quiz-4pictures/pictures.module#PicturesModule'
  },*/
  /*{
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },*/
  /*{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
