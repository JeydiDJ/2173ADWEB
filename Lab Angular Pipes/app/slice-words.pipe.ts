import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWords'
})
export class SliceWordsPipe implements PipeTransform {
  transform(value: string, start: number, end: number): string {
    if (!value) return '';
    const words = value.split(' ');
    return words.slice(start, end).join(' ');
  }
}
