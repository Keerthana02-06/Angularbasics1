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
  sampleData=''
  name = 'keerthu';
  idName="sampleID"
  haserror=false;


  OnButton(fullName:any){
    this.name="Angular"
    this.sampleData=fullName.value
  
  }

}
