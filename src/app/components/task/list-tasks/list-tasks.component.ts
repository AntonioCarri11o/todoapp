import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { task } from 'src/app/types/task';
import { UpdateTaskComponent } from '../update-task/update-task.component';
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})

export class ListTasksComponent {
  constructor(public dialog:MatDialog){
    //localStorage.removeItem('tasks');
  }
  tasks=JSON.parse(localStorage.getItem('tasks')!)
  /*
  constructor(){
    let tasks:task[]=[]
    tasks.push({
      title:"titulo",
      description:"nueva tarea 1",
      date:Date.now().toString(),
      status:"Pendiente",
    },
    {
      title:"titulo 2",
      description:"nueva tarea 2",
      date:Date.now().toString(),
      status:"Pendiente",    
    }
    )
    localStorage.setItem('tasks',JSON.stringify(tasks))
    console.log(JSON.parse(localStorage.getItem('tasks')!))
  }
  */
 update(task:task){
  const dialogRef=this.dialog.open(UpdateTaskComponent,{data:task,width:"35%"})
 }
 delete(id:number){
  //this.delete(this.tasks)
  for(let i=0;i<this.tasks.length;i++){
    if(this.tasks[i].id===id){
      this.tasks.splice(i,1)
    }
  }
  localStorage.setItem('tasks',JSON.stringify(this.tasks))
  window.location.reload();
 }
 
}
