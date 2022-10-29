import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if (arg === '' || arg.length < 1) return value;
    const result = [];
    for (const mutant of value) {
      if (mutant.mutnom.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        result.push(mutant);
      };
    };
    for (const mutant of value) {
      if (mutant.mutapodo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        result.push(mutant);
      };
    };

    for (const mutant of value) {
      if (mutant.paiid.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        result.push(mutant);
      };
    };

    return result;
  }

}
