import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SharedModule } from './components/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { FilterHeroPipe } from './filter-hero.pipe';
import { InputUpperCaseDirective } from './input-upper-case.directive';
import { HomeComponent } from './components/home/home.component';
import { BreakImageDirective } from './break-image.directive';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ConfirmationDialogComponent,
    FilterHeroPipe,
    InputUpperCaseDirective,
    HomeComponent,
    BreakImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [ FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
