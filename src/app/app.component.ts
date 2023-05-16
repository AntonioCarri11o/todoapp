import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from './components/task/new-task/new-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-app';
  constructor(public dialog:MatDialog){}
  minDate = new Date(1920, 1, 1);
  maxDate = new Date();
  newTask(){
    const dialogRef=this.dialog.open(NewTaskComponent,{width:"35%"})
  }

}
