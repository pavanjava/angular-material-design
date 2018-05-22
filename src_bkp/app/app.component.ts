import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CourseDialogComponent} from "./course-dialog/course-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularjs';

  constructor(private dialog: MatDialog) {}

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CourseDialogComponent,dialogConfig);
  }

}
