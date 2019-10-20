import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], prop: string, method: Method, propertytype): any {
    if (arr) {
      if (!prop) {
        return arr
      } else if (propertytype === "number") {
        return this.filternum(arr, prop, method)
      }
      else if (propertytype === "string") {
        return this.filterstring(arr, prop, method)
      }
    } else {
      return [];
    }
  }


  filternum(arr: any[], fieldvalue: string, method: Method): any[] {

    switch (method) {
      case "descending": return arr.sort(function (a, b) {
        return b[fieldvalue] - a[fieldvalue];
      });
      case "ascending": return arr.sort(function (a, b) {
        return a[fieldvalue] - b[fieldvalue];
      });
      case "nosort": return arr;
    }
  }


  filterstring(arr: any[], fieldvalue: string, method: Method): any[] {
    switch (method) {
      case "descending":
        return arr.sort(function (a, b) {
          if (a[fieldvalue] > b[fieldvalue]) {
            return -1;
          }
          if (a[fieldvalue] < b[fieldvalue]) { return 1; }
          return 0;

        });


      case "ascending": {
        return arr.sort(function (a, b) {
          if (a[fieldvalue] < b[fieldvalue]) {
            return -1;
          }
          if (a[fieldvalue] > b[fieldvalue]) { return 1; }

          return 0;


        });

      }
      case "nosort": {
        return arr;

      }
    }
  }
}
type Method = "descending" | "ascending" | "nosort";

