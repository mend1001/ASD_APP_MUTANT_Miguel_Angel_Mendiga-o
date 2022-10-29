import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchVeh'
})
export class SearchVehiclePipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if (arg === '' || arg.length < 1) return value;
    const result = [];
    for (const vehicle of value) {
      if (vehicle.vehnom.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        result.push(vehicle);
      };
    };

    return result;
  }

}
