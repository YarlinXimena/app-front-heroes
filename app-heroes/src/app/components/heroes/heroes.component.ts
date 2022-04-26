import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms'
import { Observable, Subject, takeUntil } from 'rxjs'
import { Hero } from 'src/app/model/hero'
import { DialogService } from 'src/app/service/confirmation-dialog.service'
import { HeroServiceService } from 'src/app/service/hero-service.service'
import { PageEvent } from '@angular/material/paginator'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  
  pageEvent?: PageEvent
  searchValue?: string;
  heroes?: Observable<Hero[]>

  createHeroForm: FormGroup
  searchForm: FormGroup

  selectedHeroId: number = 0
  isUpdating = false
  pageLength: number = 0
  heroesPaginable?: any = []
  currentHeroes:any = []

  name: string =''
  description: string = ''

  private ngUnsubscribe = new Subject<void>()

  constructor(private heroService: HeroServiceService, private formBuilder: FormBuilder, private confirmationDialog: DialogService) { 
    
    this.createHeroForm = this.formBuilder.group({
      name: new FormControl( '', [ Validators.required]),
      description: new FormControl( '', [ Validators.required])
      
    })
    this.searchForm = new FormGroup({
      searchValue: new FormControl()
    })
  }

  get nameInvalid(){
    return this.createHeroForm.get('name')?.invalid && this.createHeroForm.get('name')?.touched
  }
  get descriptionInvalid(){
    return this.createHeroForm.get('description')?.invalid && this.createHeroForm.get('description')?.touched
  }

  ngOnInit(): void {
    this.heroes = this.heroService.subscription().pipe(takeUntil(this.ngUnsubscribe))
    this.heroes?.subscribe(heroes => {
    this.currentHeroes = heroes
      this.pageLength = heroes.length
      this.heroesPaginable = this.currentHeroes.slice(0, 5)
    })
  }

  createHero(){
    this.heroService.addHero(this.createHeroForm.value.name, this.createHeroForm.value.description )
      this.createHeroForm.patchValue({
        name: '',
        description: ''
    })
    this.createHeroForm.markAsUntouched() 
  }

  selectHeroToEdit(hero: Hero){
    this.selectedHeroId = hero.id
    this.createHeroForm.patchValue({
      name: hero.name,
      description: hero.description
    })
    this.isUpdating = true
  }

  updateHero(){
    let hero: Hero = new Hero(this.selectedHeroId, this.createHeroForm.value.name, this.createHeroForm.value.description)
    this.heroService.updateHero(hero)
    this.createHeroForm.patchValue({
      name: '',
      description: ''
    })
    this.createHeroForm.markAsUntouched()
    this.isUpdating = false
  }

  openConfirmationDialog(hero: Hero){
    this.confirmationDialog.confirmDialog(hero)
  }

  onPaginateChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if ( endIndex > this.currentHeroes.length){
      endIndex = this.currentHeroes.length
    }
    this.heroesPaginable = this.currentHeroes.slice(startIndex, endIndex)
  }
  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
