import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pictures',
    loadChildren: './quiz-4pictures/pictures.module#PicturesModule'
  },
  /*{
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },*/
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
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
