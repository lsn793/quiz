import { Component} from '@angular/core';

@Component({
    selector: 'app-startup',
    template: `
                <div>
                    <button routerLink="/pictures">4 pictures</button>
                    <button routerLink="/orders">Orders</button>
                </div>
              `
  })

  export class StartupComponent {   
  }