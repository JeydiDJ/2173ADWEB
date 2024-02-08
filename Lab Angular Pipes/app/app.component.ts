import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: Date = new Date();
  pastDate: Date = new Date('2023-01-01');
  
  object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };

  jsonString: string = '{"key1":"value1","key2":"value2","key3":"value3"}';

  array = ['a', 'b', 'c', 'd', 'e'];
  sentence = 'The quick brown fox jumps over the lazy dog';
  text = 'abcdef';

  numbers = [1, 2, 3, 4, 5];
}
