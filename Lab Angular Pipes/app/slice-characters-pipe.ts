import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceCharacters'
})
export class SliceCharactersPipe implements PipeTransform {
  transform(value: string, start: number, end: number): string {
    if (!value) return '';
    return value.slice(start, end);
  }
}
