import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], prop: string, value: any , method:Method): any {
    if (arr) {
      if (!value) {
        return arr
      } 
      else{
        return arr.filter(obj => this.filter(obj[prop].toString(),value.toString(), method))
      }
    } else {
      return []
    }
  }

  filter(source :string, target :string, method:Method) : boolean {
    switch(method) {
      case "equality"  : return source.toLowerCase() === target.toLowerCase()
    }
  }

}

type Method ="includes" | "equality" | "not-equal"