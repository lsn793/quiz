import { Component, EventEmitter, Input}  from '@angular/core';
import { environment }          from '../../../../../environments/environment';
import {
    trigger, state, style, animateChild,
    animate, transition, query, group,
  } from '@angular/animations';


@Component({
    selector: 'grid-component',
    templateUrl: './grid.html',
    styleUrls: ['./grid.css'],
    animations: [
        trigger('Disappears', [
            state('in', style({ opacity: 1 })),
            transition('* => out', [
                animate('900ms 500ms', style({ opacity: 0 }))
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
                animate('700ms 200ms cubic-bezier(.93,-0.54,.83,.67)', style({ transform: 'translateX(-100%)' }))
            ]),
        ]),
    ],
})

export class GridComponent {
    animation: boolean = false;
    hidden: boolean = false;
    sources:                string[];
    @Input() question:      string;
    @Input() clicked:       any;
    // @Input() answers:       string[];
    private _answers:       any;
    @Input()
    set answers(answers: any) {
        this._answers=answers;
        this.sources = Object.keys(answers).sort(() => Math.random() - 0.5);
        console.log(this.sources);
    }
    
    get answers(): any { return this._answers; }
    path: string = environment.basehref_assets; //root path for assets/images

    constructor() {}
    
    ngOnInit() {
    }

    onClick(e,i){
        console.log(e);

        e = e.target || e.srcElement;
        if (e.nodeName === 'IMG') {
            if (!this.isValidAnswer(decodeURIComponent(e.currentSrc))) {
                e.parentNode.parentNode.style.backgroundColor = 'darkred'
                this.sources[i] = ''; 
            }
            else {
                e.parentNode.parentNode.style.backgroundColor = 'green';
                //this.animation = true;//start dissapears animation
                //this.hidden = true;//start dissapears animation
                //this.clicked(decodeURIComponent(e.currentSrc));
                let src = decodeURIComponent(e.currentSrc);
                this.sources[i] = ''; 

                 //this.sources = this.sources.filter(source => !src.includes(source));
            }
        }        
    }

    isValidAnswer = (url: string) => {
        let obj = this.answers;
        var found = Object.keys(obj).find((key) => {
            return url.includes(key);
        })  
        return  obj[found]; 
    }
//     trackByFn = (index: number, item: HTMLDivElement) => {
//         console.log(item);
//         return index+22;
//     }
}



