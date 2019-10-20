import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], prop: string): any {
    
    if(!arr)return null;
    if(!prop)return arr;

    prop = prop.toLowerCase();

    return arr.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(prop);
    });
  }

}

