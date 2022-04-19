import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
    name:'images'
})

export class ImagesPipe implements PipeTransform {

   
    transform(value: Heroe ): string {

        return `assets/heroes/${ value.id}.jpg`;
    }
    
}