import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-comp-from-cmd',
  templateUrl: './comp-from-cmd.component.html',
  styleUrls: ['./comp-from-cmd.component.css']
})
export class CompFromCmdComponent /*implements OnInit, DoCheck, OnDestroy */{
  
  constructor() { }
/*
  ngOnInit(): void {
    alert("OnInit executed!");
  }

  ngDoCheck(){
    alert("DoCheck executed!");
    

  }
  ngOnDestroy(){
    alert("Component Destroyed");
  }*/
}
