import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { QuizDirective } from './quiz.directive';
import { QuizItem }      from './quiz-item';
import { QuizComponent } from './quiz.component';

import { QuizService }    from './quiz.service';


@Component({
  selector: 'app-quiz-game',
  template: `
              <div class="quiz">
                <h3>SCORE {{score}}:{{quize.length}}</h3>
                <h3>LEVEL {{level}}:{{quizes.length}}</h3>
                <ng-template quiz-host></ng-template>
              </div>
            `
})
export class QuizGameComponent implements OnInit, OnDestroy {
  quiz_name:string;
  quizes: QuizItem[][];
  quize: QuizItem[];
  currentIndex: number = -1;
  score:        number = 0;
  level:        number = 1;
  @ViewChild(QuizDirective) quizHost: QuizDirective;

  constructor(private quizService: QuizService, private componentFactoryResolver: ComponentFactoryResolver, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let path =  window.location.pathname;
    let found = path.lastIndexOf("/");
    this.quiz_name = path.slice(found+1);
    switch (this.quiz_name) {
      case 'flags':
        this.quizes = this.quizService.getQuiz();
        break;
      default:
        this.quizes = this.quizService.getQuiz();
    }

    let lvl = localStorage.getItem(this.quiz_name)    
    if (lvl && (Number(lvl) <= this.quizes.length)) {
      this.level = Number(lvl);
    } 

    this.loadComponent()
  }

  ngOnDestroy() {
  }

  onClicked(url: string) {
    if (this.isValidAnswer(decodeURIComponent(url))) {
      //setStyleValid()
      this.score++;
    }
    else {
      //setStyleInvalid()
    }
    
    if (this.isEndOfLevel()){

      if (this.isScoreEnough()) {
          this.score = 0;
          this.currentIndex = -1;
          
          if (this.isEndOfGame()) {
            //showResults()
            console.log('END.GAME. WINNER! CONGRADS!')
            localStorage.setItem(this.quiz_name, String(this.quize.length));
            this.router.navigate(['./win'], {relativeTo: this.route, skipLocationChange: true});
          }
          else {
            console.log('LOAD NEXT LEVEL')
            this.level++;
            localStorage.setItem(this.quiz_name, String(this.level));
            this.loadComponent();
          }
        }
        else {
          console.log('LOOSER. Start level again?')
          this.score = 0;
          this.currentIndex = -1;
          //start again?
          this.router.navigate(['./loose'], {relativeTo: this.route, skipLocationChange: true});
        }
      }
    else {
      this.loadComponent();
    }
  }

  isEndOfGame = () => {
    return this.level + 1 > this.quizes.length;
  }

  isScoreEnough = () => {
    return this.score >= this.quize.length;
  }

  isEndOfLevel = () => {
    return this.currentIndex+1 >= this.quize.length;
  }

  
  isValidAnswer = (url: string) => {
    if (this.currentIndex >= 0 && this.currentIndex < this.quize.length) {
      let obj = this.quize[this.currentIndex].answers;
      var found = Object.keys(obj).find((key) => {
        return url.includes(key);
      })  

      return obj[found]; 
    }

    return false;  
  }

  loadComponent() {
    if (this.level > this.quizes.length)
      this.level = 1;
    this.quize = this.quizes[this.level-1];
    this.currentIndex = (this.currentIndex + 1) % this.quize.length;
    let quizItem = this.quize[this.currentIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(quizItem.component);

    let viewContainerRef = this.quizHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<QuizComponent>componentRef.instance).question = quizItem.question;
    (<QuizComponent>componentRef.instance).answers = quizItem.answers;
    (<QuizComponent>componentRef.instance).clicked = this.onClicked.bind(this);
  }
}