import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicturesRoutingModule }  from './pictures-routing.module';
import { AppQuizComponent }       from './core/app-quiz.component';
import { QuizGameComponent }      from './core/quiz-game.component';
import { QuizService }            from './core/quiz.service';
import { GridComponent }          from './core/components/grid/grid';
import { QuizDirective }          from './core/quiz.directive';



@NgModule({
  imports: [
    CommonModule,
    PicturesRoutingModule
  ],
  providers: [QuizService],
  declarations: [ AppQuizComponent,
                  QuizGameComponent,
                  GridComponent,
                  QuizDirective
                 ],
entryComponents: [ GridComponent ],

})
export class PicturesModule { }
