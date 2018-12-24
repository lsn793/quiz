import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { AppStartupComponent }     from './appstartup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule],
  declarations: [ AppComponent, AppStartupComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}