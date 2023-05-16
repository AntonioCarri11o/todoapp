import { Component,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { task } from 'src/app/types/task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  options:string[]=["pendiente","vencido","hecho"];
  constructor(public dialog:MatDialogRef<UpdateTaskComponent>,@Inject(MAT_DIALOG_DATA)public task:task){

  }
  close(){
    this.dialog.close()
  }
  update(){
    let tasks=JSON.parse(localStorage.getItem('tasks')!)
    for(let i=0;i<tasks.length;i++){
      if(tasks[i].id===this.task.id){
        tasks[i]=this.task;
      }
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
    window.location.reload();
  }
}
