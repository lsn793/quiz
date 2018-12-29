import { Component, Input, OnDestroy, OnInit }  from '@angular/core';
import { QuizComponent }     from '../../quiz.component';
import { environment }          from '../../../../../environments/environment';
import {
    trigger, state, style, animateChild,
    animate, transition, query, group,
  } from '@angular/animations';


@Component({
    selector: 'quiz-component',
    templateUrl: './grid.html',
    styleUrls: ['./grid.css'],
    animations: [
        trigger('Disappear', [
            state('in', style({ opacity: 1 })),
            // transition(':enter', [
            //   style({ opacity: 0 }),
            //   animate('1000ms ease-out')
            // ]),
            transition('* => out', [
                animate('700ms', style({ opacity: 0 }))
            ]),
        ]),
         trigger('FlyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            // state('in', style({ opacity: 1 })),
            // transition(':enter', [
            //   style({ opacity: 0 }),
            //   animate('300ms ease-out')
            // ]),
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('300ms ease-out')
              ]),
            transition('* => out', [ //http://cubic-bezier.com
                //animate('1000ms 100ms cubic-bezier(.68,-0.33,.83,.67)', style({ transform: 'translateX(-100%)' }))
                animate('700ms cubic-bezier(.93,-0.54,.83,.67)', style({ transform: 'translateX(-100%)' }))
            ]),
        ]),
    ],
})

export class GridComponent implements QuizComponent {
    @Input() question: any;
    @Input() answers: any;
    @Input() clicked: any;
    images_path: string[] = [];
    images: Array<HTMLImageElement> = [];
    path: string = environment.basehref_assets; //root path for assets/images
    deleted: boolean = false; //flag for animation - then deleted=true - component grid going to be deleted
    isValid: boolean = false; // valid answer

    constructor() {}
    
    ngOnInit() {
        this.images_path = Object.keys(this.answers).sort(() => Math.random() - 0.5);
        //this.preload();
    }

    // preload() {
    //     for (let i = 0; i < this.images_path.length; i++) {
    //         this.images[i] = new Image();
    //         this.images[i].src = this.path + this.images_path[i];
    //     }
    // }
   
    onClick(e){
        e = e.target || e.srcElement;
        if (e.nodeName === 'IMG') {
            this.isValid = this.isValidAnswer(decodeURIComponent(e.currentSrc));
            e.parentNode.parentNode.style.backgroundColor = this.isValid ? 'green': 'red';
        }        
        this.deleted = true;
    }

    animationDone(event) {       
        if (event.fromState === 'in' && event.toState === 'out' && event.triggerName === 'FlyInOut') {
             this.clicked(this.isValid);
        }
      }

    isValidAnswer = (url: string)   => {
        let obj = this.answers;
        var found = Object.keys(obj).find((key) => {
            return url.includes(key);
        })  
        return  obj[found]; 
    }

}



