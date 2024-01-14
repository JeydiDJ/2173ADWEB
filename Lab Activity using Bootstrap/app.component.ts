// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeMessage = 'Welcome To MStudio!';
  subheading = 'Record your best Jams here';
  buttonText = 'Tell Me More';
}
