import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monthly-expense';
 mode1 = true;
  onchangeMode(){
this.mode1 = !this.mode1;
  }
}
