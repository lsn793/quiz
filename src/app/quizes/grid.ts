import { Component, Input }  from '@angular/core';
import { QuizComponent }     from '../quiz.component';

@Component({
    selector: 'quiz-component',
    templateUrl: './grid.html',
    styleUrls: ['./grid.css']
})

export class GridComponent implements QuizComponent {
    @Input() question: any;
    @Input() answers: any;
    @Input() clicked: any;
    images: string[] = [];

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



