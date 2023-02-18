import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmaterial';

  constructor(
    public dialog:MatDialog,
    private router:Router
    
    ){}

  openDialog(){
    let dialogRef = this.dialog.open(ConfirmdialogComponent,{
      data:{
        title:'Confirm ',
        description:'Are you sure do you want to Open?',
        cancelText:'No',
        confirmText:'Yes'
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        
    })
  }
  deleteDialog(){
    let dialogRef = this.dialog.open(ConfirmdialogComponent,{
      data:{
        title:'Confirm Delete',
        description:'Are you sure do you want to delete?',
        cancelText:'No',
        confirmText:'Yes'
      }
    });
    
    
    dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        
    })
  }
  updateDialog(){
    
    this.checkUpdate()
  }

  checkUpdate(){
    let dialogRef = this.dialog.open(ConfirmdialogComponent,{
      data:{
        title:'Confirm Update',
        description:'Are you sure do you want to update?',
        cancelText:'No',
        confirmText:'Yes'
      }
    });
    
    
    dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        this.router.navigate(['404page'])
    })

  }

}
