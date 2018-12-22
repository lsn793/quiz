import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { StartupComponent }     from './startup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule],
  declarations: [ AppComponent, StartupComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}