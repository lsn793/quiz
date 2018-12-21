import { Component, OnInit } from '@angular/core';
import { FlagService } from './service';

@Component({
    selector: 'app-services',
    template: ''
    /*selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']*/
})
export class ServiceComponent implements OnInit {
    constructor(private flags: FlagService) { }

    ngOnInit() {
        console.log("ServiceComponent: " + this.flags.message);
    }
}
