import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-4-pictures',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.router.navigate(["./service"], {relativeTo: this.route, skipLocationChange: true});
  }

  onEmited(message: string) {
    console.log("onEmited: " + message);

  }
}
