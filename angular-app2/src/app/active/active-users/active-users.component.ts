import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  userArray: any;
 
  constructor(private list:UsersServiceService) { }
  show:boolean = false;
  ngOnInit(): void {
    this.userArray = this.list.getUsers();
    
   
  }


}
