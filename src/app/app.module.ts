import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { StartupComponent }     from './startup.component'


@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule],
  declarations: [ AppComponent, StartupComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}