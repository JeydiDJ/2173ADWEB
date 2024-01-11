import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
  clientName = 'Jeydi';
  appliedCSS = 'white';
  notAppliedCSS = false;
  myColor = 'red';


//event binding
clickCount=0
clickMe(){
  this.clickCount++;
  }
showData($event: any){
  console.log('Button is clicked!');
    if($event){
      console.log($event.target);
      console.log($event.target.value);
   }}}