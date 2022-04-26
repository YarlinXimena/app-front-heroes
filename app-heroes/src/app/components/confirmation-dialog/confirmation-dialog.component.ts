import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Hero } from 'src/app/model/hero'
import { HeroServiceService } from 'src/app/service/hero-service.service'

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public dataDialog: Hero, 
     private heroService: HeroServiceService) { }

  ngOnInit(): void {}
  
  deleteHero(id: number){
    this.heroService.deleteHero(id)
    this.dialogRef.close()
  }

  closeDialog() { 
    this.dialogRef.close({ event: 'Cancel'})
  }
}
