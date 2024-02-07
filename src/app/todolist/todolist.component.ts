import { Component, OnDestroy, OnInit } from '@angular/core';
import {todo} from '../todo'
import { TodoServiceService } from '../service/todo-service.service';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit, OnDestroy {

toggleForm: boolean= false;
toggleAdd: boolean=true;

SearchQuery: string='';


private searchSubject: Subject<string>= new Subject<string>();

filterTodoArr:todo[]=[]

todoValue:todo={
  title:'',
  description:'',
  date: '',
}

  constructor(public taskService : TodoServiceService,private router : Router) { }
  ngOnDestroy(): void {
    console.log("ngOnDestroy was called")
    sessionStorage.clear()
  }

  
  //todolist=[]
  
  ngOnInit(): void {
    const temp=localStorage.getItem("todoTasks")
    this.taskService.todoTasks=temp?JSON.parse(temp):[]
    this.filterTodoArr = this.taskService.todoTasks;
    this.searchSubject.pipe(debounceTime(300)).subscribe(()=>
    {this.filterTodo();
    });
  }

  logOut() {
    // sessionStorage.clear()

    this.router.navigate(['/login'])
    console.log("logout")
    }


  addTask() {
    this.taskService.add(this.todoValue)
    this.filterTodoArr = this.taskService.todoTasks;
    this.todoValue={
      title:'',
      description:'',
      date: '',
    }
    this.toggleForm=false;
    this.toggleAdd=true;
  }

  Add() {
    this.toggleForm=true;
    this.toggleAdd=false;
    }

  deleteTask(i:number) {
    this.taskService.delete(i)
    }

  search(event: any) {
    
    this.SearchQuery=event.target.value;
    this.searchSubject.next(this.SearchQuery);
  }

  filterTodo() {
    // console.log(this.SearchQuery)
     this.filterTodoArr = this.taskService.todoTasks.filter(
      (task)=> {
     return task.title.toLowerCase().includes(this.SearchQuery.toLowerCase())||
      task.description.toLowerCase().includes(this.SearchQuery.toLowerCase())||
      task.date.toLowerCase().includes(this.SearchQuery.toLowerCase());
    });
    }
}
