import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component'
import { Hero } from '../model/hero'


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor( private dialog: MatDialog ) { }

  confirmDialog(hero: Hero): Observable<Hero>{
    return this.dialog.open( ConfirmationDialogComponent, {
      data: hero,
      width: '450px',
      disableClose: true,
    }).afterClosed()
  }
 
}
