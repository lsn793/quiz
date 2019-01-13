import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { QuizDirective } from './quiz.directive';
import { QuizItem }      from './quiz-item';
import { QuizService }    from './quiz.service';


@Component({
  selector: 'app-quiz-game',
  template: `
              <div>
                  <!--<progress-bar-component [total_lives]=total_lives [lives]=lives [score]=score [total]=quize.length [level]=level></progress-bar-component>-->
                  <ng-template quiz-host></ng-template>
              </div>              
            `
})
export class QuizGameComponent implements OnInit {
  quiz_name:      string;
  quize:          QuizItem[];
  currentIndex:   number = -1;
  lives:          number = 0;
  total_lives:    number = 0;
  // answers:        string[];
  answers:        any;
  question:       string;
  @ViewChild(QuizDirective) quizHost: QuizDirective;
  componentRef:   any;

  constructor(private quizService: QuizService,  private componentFactoryResolver: ComponentFactoryResolver, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let path =  window.location.href;
    let search = "&theme=";
    let found = path.lastIndexOf(search);
    this.quiz_name = path.slice(found + search.length);

    switch (this.quiz_name) {
      case 'flags':
        this.quize = this.quizService.getQuiz();
        break;
      default:
        this.quize = this.quizService.getQuiz();
    }

    this.loadNextGridComponent();
        
  }

  loadNextGridComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.quize.length;
    let quizItem = this.quize[this.currentIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(quizItem.component);
    let viewContainerRef = this.quizHost.viewContainerRef;
    viewContainerRef.clear();
    
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<QuizComponent>this.componentRef.instance).question      = quizItem.question;
    (<QuizComponent>this.componentRef.instance).answers       = quizItem.answers;
    (<QuizComponent>this.componentRef.instance).clicked       = this.onClicked.bind(this);   
    (<QuizComponent>this.componentRef.instance).loadComponent = this.loadNextGridComponent.bind(this);
  }

  onClicked(src: string) {
    //this.loadNextGridComponent();
    console.log(src);
    //this.answers = this.answers.filter(answer => !src.includes(answer));
    // console.log(this.answers);
  }
  
}