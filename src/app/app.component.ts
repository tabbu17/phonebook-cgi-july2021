import { Component } from '@angular/core';

// Decorator -- ties the html, css, ts together
@Component({
  selector: 'app-root', // exposed in a element selector -- mandatory
  templateUrl: './app.component.html', // html -- mandatory -- should be only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'phonebook-cgi-july2021';
}
