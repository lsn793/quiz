import { Component} from '@angular/core';

@Component({
    selector: 'app-startup',
    template: `
                <button routerLink="/pictures">4 pictures</button>
                <button routerLink="/orders">Orders</button>
              `
  })

  export class StartupComponent {   
  }