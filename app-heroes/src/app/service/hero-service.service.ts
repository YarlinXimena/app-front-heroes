import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Hero } from '../model/hero'

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }

  idSequence: number = 1
  heroes: Hero[] = [
    { 'id': this.idSequence++, "name": "Batman", "description": "Batcave, Stately Wayne Manor, Gotham City Hall of Justice, Justice League Watchtower"},
    { 'id': this.idSequence++, "name": "Superman", "description": "Batcave, Stately Wayne Manor, Gotham City Hall of Justice, Justice League Watchtower"},
    { 'id': this.idSequence++, "name": "Aquaman", "description": "Batcave, Stately Wayne Manor, Gotham City Hall of Justice, Justice League Watchtower"},
    { 'id': this.idSequence++, "name": "Aurora", "description": "Batcave, Stately Wayne Manor, Gotham City Hall of Justice, Justice League Watchtower"},
    { 'id': this.idSequence++, "name": "Harley Quinn", "description": "Batcave, Stately Wayne Manor, Gotham City Hall of Justice, Justice League Watchtower"},
  ]

  heroesSubject: BehaviorSubject<Hero[]> = new BehaviorSubject(this.heroes)
  
  subscription(){
    return this.heroesSubject.pipe()
  }

  addHero(name: string, description: string){
    let newHero: Hero = new Hero(this.idSequence, name, description)
    this.idSequence++
    this.heroes.push(newHero)
    this.heroesSubject.next(this.heroes)
  }

  updateHero(hero: Hero){
    let heroFound = this.heroes.find( h => h.id === hero.id ) 
    if (heroFound) {
        heroFound.name = hero.name
        heroFound.description = hero.description
        this.heroesSubject.next(this.heroes)
    }
  }

  deleteHero(id: number){
    let heroFound = this.heroes.find( h => h.id === id )
    if (heroFound) {
      this.heroes.splice(this.heroes.indexOf(heroFound), 1)
      this.heroesSubject.next(this.heroes)
    }
  }
}
