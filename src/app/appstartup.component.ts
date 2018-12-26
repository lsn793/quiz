import { Component, OnInit} from '@angular/core';
import { QuizThemeService } from './quiz-theme.service';
import { Theme }            from './theme';
import { environment }          from '../environments/environment';


@Component({
    selector: 'app-startup',
    templateUrl: './appstartup.component.html',
    styleUrls: ['./appstartup.component.css']
  })

  export class AppStartupComponent implements OnInit {   
      themes: Theme[];
      path: string = environment.basehref_assets;
      constructor(private quizThemeService: QuizThemeService) {}

      ngOnInit() {   
        this.themes = this.quizThemeService.getQuizTheme(); 
      }
  }