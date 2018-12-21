import { Injectable }           from '@angular/core';
import { GridComponent }        from './components/grid/grid';
import { QuizItem }             from './quiz-item';

@Injectable()
export class QuizService {
  getQuiz() {
    return [[//level1
      new QuizItem(GridComponent, "China",  {"/flags/images (4).png": true, '/flags/images (3).png':false,'/flags/images (1).png':false,'/flags/images (6).png':false}),
      new QuizItem(GridComponent, "Brazil", {"/flags/images (8).png": false,'/flags/images (9).png':false,'/flags/images (10).png':false,'/flags/images (11).png':true}),
      new QuizItem(GridComponent, "Greece", {"/flags/images (5).png": false,'/flags/images (6).png':true,'/flags/images (7).png':false,'/flags/images (8).png':false}),
    ],
    [//level2
      new QuizItem(GridComponent, "China",  {"/flags/images (4).png": true,'/flags/images (3).png':false,'/flags/images (1).png':false,'/flags/images (6).png':false}),
      new QuizItem(GridComponent, "Brazil", {"/flags/images (8).png": false,'/flags/images (9).png':false,'/flags/images (10).png':false,'/flags/images (11).png':true}),
      new QuizItem(GridComponent, "Greece", {"/flags/images (5).png": false,'/flags/images (6).png':true,'/flags/images (7).png':false,'/flags/images (8).png':false}),
    ],

    ]
  }
}