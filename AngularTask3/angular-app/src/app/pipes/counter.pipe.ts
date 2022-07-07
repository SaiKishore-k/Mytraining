import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(str: String): String {
    return `It is a Pipe,${str}`;
  }


}
