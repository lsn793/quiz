import { Component, Input }  from '@angular/core';
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
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition(':enter', [
              style({ transform: 'translateX(-100%)' }),
              animate('300ms ease-out')
            ]),
            transition(':leave', [
              animate('300ms ease-out', style({ transform: 'translateX(100%)' }))
            ])
        ]),
        trigger('myInsertRemoveTrigger', [
            transition(':enter', [
              style({ opacity: 0 }),
              animate('1s', style({ opacity: 1 })),
            ]),
            transition(':leave', [
              animate('1s', style({ opacity: 0 }))
            ])
        ]),
      ]
})

export class GridComponent implements QuizComponent {
    @Input() question: any;
    @Input() answers: any;
    @Input() clicked: any;
    images: string[] = [];
    path: string = environment.basehref_assets;

    constructor() {}
    
    ngOnInit() {
        this.images = Object.keys(this.answers).sort(() => Math.random() - 0.5);
    }

    onClick(e){
        e = e.target || e.srcElement;
        if (e.nodeName === 'IMG') {
            console.log(e.currentSrc)
            this.clicked(e.currentSrc);
        }        
    }
}



