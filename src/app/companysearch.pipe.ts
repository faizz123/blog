import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companysearch'
})
export class CompanysearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    debugger
    return value.filter((val:any) => {
      let rVal = (val.company.name.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
