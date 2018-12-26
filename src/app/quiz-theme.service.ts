import { Injectable }           from '@angular/core';
import { Theme }                from './theme';


@Injectable({
  providedIn: 'root'
})
export class QuizThemeService { //get quiz theme (flags, presidents) depending on url
  
  
  getQuizTheme() {
    return [
      new Theme("/flags/images (4).png", "pictures", "4 pictures"),
      new Theme("/flags/images (6).png", "pictures", "4 pictures"),
      new Theme("/flags/images (6).png", "pictures", "4 pictures"),
      new Theme("/flags/images (6).png", "pictures", "4 pictures"),
      new Theme("/flags/images (6).png", "pictures", "4 pictures"),
      new Theme("/flags/images (6).png", "pictures", "4 pictures"),
    ];  
  }
}