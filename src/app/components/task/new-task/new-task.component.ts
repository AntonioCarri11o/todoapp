import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { task } from 'src/app/types/task';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  constructor(public dialog:MatDialogRef<NewTaskComponent>){}
  task:task={
    id:0,
    title:"",
    description:"",
    date:"",
    status:"pendiente"
  }
  close():void{
    this.dialog.close();
  }
  send(){
    if(localStorage.getItem('tasks')===null){
      let tasks:task[]=[this.task];
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
      let tasks:task[]=JSON.parse(localStorage.getItem('tasks')!)
      this.task.id=tasks.length;
      tasks.push(this.task)
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    window.location.reload();
  }

}
