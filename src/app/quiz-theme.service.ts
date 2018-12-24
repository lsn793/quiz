import { Injectable }           from '@angular/core';
import { Theme }                from './theme';

@Injectable({
  providedIn: 'root'
})
export class QuizThemeService { //get quiz theme (flags, presidents) depending on url
  
  
  getQuizTheme() {
    return [
      new Theme("deded", "pictures", "4 pictures")
    ];  
  }
}