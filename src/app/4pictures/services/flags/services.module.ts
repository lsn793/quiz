import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './services-routing.module';
import { ServiceComponent } from './service.component';

import {FlagService} from './service';

@NgModule({
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  declarations: [ServiceComponent],
  providers: [FlagService]
})

export class ServicesModule { }
