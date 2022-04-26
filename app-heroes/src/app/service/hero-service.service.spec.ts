import { TestBed } from '@angular/core/testing'
import { Hero } from '../model/hero'
import { HeroServiceService } from './hero-service.service'

describe('HeroServiceService', () => {
  let service: HeroServiceService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(HeroServiceService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should call addHero with name and description', () => {
    const name = "holitas"
    const description = 'Des'

    service.addHero(name, description)

    const heroAdded = service.heroes[service.heroes.length - 1]

    expect(heroAdded.description).toEqual(description)
    expect(heroAdded.name).toEqual(name)
    expect(heroAdded.id).toBeGreaterThan(0)
  })

  it('should call updateHero and change name and description', () => {
    const newValues = new Hero(1, 'Indiana Jones', 'Batcave, Stately Wayne Manor, Gotham City Hall of Justice, Justice League Watchtower')
    
    service.updateHero(newValues)

    const updatedHero = service.heroes.find(h => h.id === newValues.id)

    expect(updatedHero?.description).toEqual(newValues.description)
    expect(updatedHero?.name).toEqual(newValues.name)
  })

  it('should call deleteHero remove it from list', () => {
    const name = "Spider-Man"
    const description = 'Crest Hill, Bristol Township Gotham County'

    service.addHero(name, description)
    const addedHero = service.heroes[service.heroes.length -1]

    service.deleteHero(addedHero.id)
    expect(service.heroes.includes(addedHero)).toBeFalse()

  })
})