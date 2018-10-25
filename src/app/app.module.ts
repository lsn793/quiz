import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { GridComponent }        from './quizes/grid'
import { QuizGameComponent }    from './quiz-game.component';
import { QuizDirective }          from './quiz.directive';
import { QuizService }            from './quiz.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [QuizService],
  declarations: [ AppComponent,
                  QuizGameComponent,
                  GridComponent,
                  QuizDirective ],
  entryComponents: [ GridComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}