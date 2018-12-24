import { Component, OnInit, Input} from '@angular/core';

import { QuizService }         from './quiz.service';
import { QuizItem }            from './quiz-item';

@Component({
  selector: 'app-quiz-4pictures',
  template: `
    <!--<div>
      <app-quiz-game [quizes]="quize" [quiz_name]="quiz_name"></app-quiz-game>
    </div>-->
    <router-outlet></router-outlet>
  `
})
export class AppQuizComponent implements OnInit {
  /*quiz_name:string;
  quize: QuizItem[][];*/

  constructor(/*private quizService: QuizService*/) {}

  ngOnInit() {
    /*let path =  window.location.pathname;
    let found = path.lastIndexOf("/");
    this.quiz_name = path.slice(found+1);

    switch (this.quiz_name) {
      case 'flags':
        this.quize = this.quizService.getQuiz();
        break;
      default:
        this.quize = this.quizService.getQuiz();
    }*/
    
  }
}