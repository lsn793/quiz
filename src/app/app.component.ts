import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lazy loading feature modules';

  ngOnInit() {
    let path =  window.location.href ;
    var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
    console.log("iframe " , path);
    console.log("parent " , url);
  }
}
