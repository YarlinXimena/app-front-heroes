import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'

import { HeroesComponent } from './heroes.component'

describe('HeroesComponent', () => {
  let component: HeroesComponent
  let fixture: ComponentFixture<HeroesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [
        FormBuilder,
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
