import { Component, OnInit } from '@angular/core';

import { QuizService }         from './quiz.service';
import { QuizItem }            from './quiz-item';

@Component({
  selector: 'app-win',
  template: `
    <H1>WINNER! CONGRADTS!</H1>
    <div>
    </div>
  `
})

export class QuizWinComponent implements OnInit { 
  
  constructor() {}

  ngOnInit() {
  }
}