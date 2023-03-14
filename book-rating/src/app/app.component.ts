import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating!';

  myDate = Date.now();

  constructor() {
    setInterval(() => {
      this.updateDate();
    }, 1000);
  }

  private updateDate() {
    this.myDate = Date.now();
  }
}
