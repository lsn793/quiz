import { Component, OnInit } from '@angular/core';

import { QuizService }         from './quiz.service';
import { QuizItem }            from './quiz-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-quiz-game [quizes]="quize"></app-quiz-game>
    </div>
  `
})
export class AppComponent implements OnInit {
  quize: QuizItem[][];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quize = this.quizService.getQuiz();
  }
}