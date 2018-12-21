import { Injectable } from '@angular/core';
//import {ServicesModule} from './services.module';

@Injectable(/*{
  providedIn: ServicesModule,
}*/)
export class FlagService {
	message:string;

	constructor() {
		this.message = "HELLO FROM Flag SERVICE";
		//console.log(this.message);
	}
}