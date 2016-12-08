import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from './movies.component';
@Pipe({
    name: 'moviefilter'
})
export class MovieFilterPipe implements PipeTransform {
    transform(value:any[], args: string): any[] {
        let movies :any[] = [];
        console.log(value);
        console.log(args)
        value.forEach(element => {
            if(!args || element.name.includes(args))
                movies.push(element)
        });
        return movies;
    }
}