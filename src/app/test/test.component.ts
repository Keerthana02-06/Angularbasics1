import { KeyedRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  idName="sampleID"
  name = 'keerthu';
  greeting=''
  haserror=true;
  name2=""

  OnButton(firstName:any){
    this.name="Angular"
    this.greeting=firstName.value
    
    
  }

  
  
}
