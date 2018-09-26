import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/models/product';
@Pipe({
    name: 'findByName'
})
export class FindByName implements PipeTransform {
    transform(items: Product[], searchText: string): any[] {
        if (!items) { return []; }
        if (!searchText) { return items; }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.title.toLowerCase().includes(searchText);
        });
    }
}
