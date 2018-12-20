import { Injectable } from '@angular/core';
//import {ServicesModule} from './services.module';

@Injectable(/*{
  providedIn: ServicesModule,
}*/)
export class FlagService {

	constructor() { 
		console.log("HELLO FROM Flag SERVICE")
	}
}