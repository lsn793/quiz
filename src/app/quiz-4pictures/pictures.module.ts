import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicturesRoutingModule }  from './pictures-routing.module';
import { AppQuizComponent }       from './core/app-quiz.component';
import { QuizLooseComponent }     from './core/quiz-loose.component';
import { QuizWinComponent }     from './core/quiz-win.component';
import { GridComponent }          from './core/components/grid/grid'
import { QuizGameComponent }      from './core/quiz-game.component';
import { QuizDirective }          from './core/quiz.directive';
import { QuizService }            from './core/quiz.service';

@NgModule({
  imports: [
    CommonModule,
    PicturesRoutingModule
  ],
  providers: [QuizService],
  declarations: [ AppQuizComponent,
                  QuizGameComponent,
                  QuizLooseComponent,
                  QuizWinComponent,
                  GridComponent,
                  QuizDirective ],
  entryComponents: [ GridComponent ],
})
export class PicturesModule { }
