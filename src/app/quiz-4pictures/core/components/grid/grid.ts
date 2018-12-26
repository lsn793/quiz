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
    images_path: string[] = [];
    images: Array<HTMLImageElement> = [];
    path: string = environment.basehref_assets;

    constructor() {}
    
    ngOnInit() {
        this.images_path = Object.keys(this.answers).sort(() => Math.random() - 0.5);
        this.preload();
    }

    preload() {
        for (let i = 0; i < this.images_path.length; i++) {
            this.images[i] = new Image();
            this.images[i].src = this.path + this.images_path[i];
        }
    }
   

    onClick(e){
        e = e.target || e.srcElement;
        if (e.nodeName === 'IMG') {
            console.log(e.currentSrc)
            this.clicked(e.currentSrc);
        }        
    }
}



