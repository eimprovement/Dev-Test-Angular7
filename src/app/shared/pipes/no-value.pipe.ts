import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'noValue'
})
export class NoValue implements PipeTransform {
  /**
   * @param value the one to be evaluated if it has value or no
   */

  transform(value: any, message: string = 'N/A') {
    return value ? value : message;
  }
}
