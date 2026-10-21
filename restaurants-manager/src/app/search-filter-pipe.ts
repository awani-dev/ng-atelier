import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from './models/restaurant';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: Restaurant[], filterText: string): any {
    return list ? list.filter((item) => item.name?.toLowerCase().includes(filterText)) : [];
  }
}
