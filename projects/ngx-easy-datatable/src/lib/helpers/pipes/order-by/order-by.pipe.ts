import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  public static _orderByComparator(a: any, b: any): number {
    if (a === null || typeof a === 'undefined') {
      a = 0;
    }
    if (b === null || typeof b === 'undefined') {
      b = 0;
    }

    if (isNaN(parseFloat(a)) || !isFinite(a) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      if (a.toString().toLowerCase() < b.toString().toLowerCase()) {
        return -1;
      }
      if (a.toString().toLowerCase() > b.toString().toLowerCase()) {
        return 1;
      }
    } else {
      // Parse strings as numbers to compare properly
      if (parseFloat(a) < parseFloat(b)) {
        return -1;
      }
      if (parseFloat(a) > parseFloat(b)) {
        return 1;
      }
    }

    return 0; // equal each other
  }

  public static byString(o, s): string {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, ''); // strip a leading dot
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
      const k = a[i];
      if (o && k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }

  public value: string[] = [];

  public transform(input: any, config: string = '+'): any {
    // make a copy of the input's reference
    if (input) {
      this.value = [...input];
      const value = this.value;

      if (!Array.isArray(value)) {
        return value;
      }

      if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
        const propertyToCheck: string = !Array.isArray(config) ? config : config[0];
        const desc = propertyToCheck.substr(0, 1) === '-';

        // Basic array
        if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
          return !desc ? value.sort() : value.sort().reverse();
        } else {
          const property: string =
            propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
              ? propertyToCheck.substr(1)
              : propertyToCheck;

          return value.sort((a: any, b: any) => {
            return !desc
              ? OrderByPipe._orderByComparator(OrderByPipe.byString(a, property), OrderByPipe.byString(b, property))
              : -OrderByPipe._orderByComparator(OrderByPipe.byString(a, property), OrderByPipe.byString(b, property));
          });
        }
      } else {
        // Loop over property of the array in order and sort
        return value.sort((a: any, b: any) => {
          for (const i of config) {
            const desc = i.substr(0, 1) === '-';
            const property = i.substr(0, 1) === '+' || i.substr(0, 1) === '-' ? i.substr(1) : i;

            const comparison = !desc
              ? OrderByPipe._orderByComparator(OrderByPipe.byString(a, property), OrderByPipe.byString(b, property))
              : -OrderByPipe._orderByComparator(OrderByPipe.byString(a, property), OrderByPipe.byString(b, property));

            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0) {
              return comparison;
            }
          }
          return 0; // equal each other
        });
      }
    }
  }
}
