import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leave_management_app';
  initialMenu = 'reqMenu';

  onCallComponent(menu: string) {
    this.initialMenu = menu;
  }
}
