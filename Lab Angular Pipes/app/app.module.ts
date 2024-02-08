import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliceWordsPipe } from './slice-words.pipe';
import { SliceCharactersPipe } from './slice-characters-pipe';
import { SliceArrayPipe } from './slice-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliceWordsPipe,
    SliceCharactersPipe,
    SliceArrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
