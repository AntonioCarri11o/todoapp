import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation-component/navigation-component.component';
import { NewTaskComponent } from './components/task/new-task/new-task.component';
import { ListTasksComponent } from './components/task/list-tasks/list-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModules } from './types/material-modules';
import {FormsModule} from '@angular/forms';
import { UpdateTaskComponent } from './components/task/update-task/update-task.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewTaskComponent,
    ListTasksComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...materialModules,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
