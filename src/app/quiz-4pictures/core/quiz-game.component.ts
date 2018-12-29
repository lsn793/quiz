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
                  <progress-bar-component [value]=progress_value [score]=score [total]=quize.length [level]=level></progress-bar-component>
                  <ng-template #elseBlock quiz-host></ng-template>
              </div>
              
            `
})
export class QuizGameComponent implements OnInit, OnDestroy {
  quiz_name:string;
  quizes: QuizItem[][];//all levels here
  quize: QuizItem[]; //current level here
  currentIndex: number = -1;
  score:        number = 0;
  level:        number = 1;
  progress_value:number = 0;
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

    //load quiz for first level
    //this.quize = this.quizes[this.level-1];
    this.quize = (this.quizes[this.level-1]).sort(() => Math.random() - 0.5); //random sort for small arrays only
    
    this.loadComponent()
  }

  ngOnDestroy() {
  }

  onClicked(isValidAnsver: boolean ) {
    if (isValidAnsver) {
      //setStyleValid()
      this.score++;
      
      //increase progress
      this.progress_value = (this.score * 100)/this.quize.length;
    }
    else {
      //setStyleInvalid()
    }
    
    if (this.isEndOfLevel()){
      this.progress_value = 0;
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
            
            //load quiz for next level
            this.quize = (this.quizes[this.level-1]).sort(() => Math.random() - 0.5); //random sort for small arrays only
            
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