import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  message ="Hello World";
  constructor() { }

  ngOnInit(): void {
  }
  multiply(x: any , y : any){
    return x*y;
  }

}
