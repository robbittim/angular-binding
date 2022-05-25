import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-binding';
  username = '';

  showSecret = false;
  // log: number[] = [];
  log: Date[] = [];

  onToggleDisplay() {
    this.showSecret = !this.showSecret;

    // this.log.push(this.log.length + 1);

    this.log.push(new Date());
  }
}
