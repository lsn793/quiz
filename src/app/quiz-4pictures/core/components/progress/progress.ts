import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar-component',
  templateUrl: './progress.html',
  styleUrls: ['./progress.css']
})

export class ProgressComponent {
  @Input() value: number = 0;
  @Input() score: number = 0;
  @Input() total: number = 0;
  @Input() level: number = 0;
}


