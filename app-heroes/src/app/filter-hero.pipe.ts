import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './model/hero';

@Pipe({
  name: 'filterHero',
  pure: false
})
export class FilterHeroPipe implements PipeTransform {

  transform(heroes: Hero[] | null, searchValue?: string ): Hero[] {

    if( !searchValue || !heroes ){
      return heroes || []
    } 
   
    return heroes.filter( hero => hero.name.toLowerCase().includes(searchValue.toLowerCase()) || hero.id.toString().includes(searchValue) )
  }
}
