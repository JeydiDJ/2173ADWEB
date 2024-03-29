// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // ... other components, directives, or pipes
  ],
  imports: [
    BrowserModule,
    // ... other modules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
