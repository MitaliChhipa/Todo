import { Injectable } from '@angular/core';
import { todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  
  
  todoTasks : todo[]=[];
  
  add(todoValue:todo){
    this.todoTasks.push(todoValue);
    localStorage.setItem("todoTasks",JSON.stringify(this.todoTasks))
    // return this.todoTasks
  }
  delete(i:number) {
    this.todoTasks.splice(i,1)
    localStorage.setItem("todoTasks",JSON.stringify(this.todoTasks))
  }
  

constructor() { }}
