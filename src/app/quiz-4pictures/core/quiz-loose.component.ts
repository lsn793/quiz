import { Component, OnInit } from '@angular/core';

import { QuizService }         from './quiz.service';
import { QuizItem }            from './quiz-item';

@Component({
  selector: 'app-loose',
  template: `
    <H1>SORRY. YOU LOOSE!</H1>
    Show Score here
    <div>
      <button routerLink="/pictures">Start level again?</button>
    </div>
  `
})

//aka Game Over Component
export class QuizLooseComponent implements OnInit { 
  
  constructor() {}

  ngOnInit() {
  }
}