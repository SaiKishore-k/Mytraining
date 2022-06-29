import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';
@Component({
  selector: 'app-deleted-users',
  templateUrl: './deleted-users.component.html',
  styleUrls: ['./deleted-users.component.css']
})
export class DeletedUsersComponent implements OnInit {

  userArray: any;
 
  constructor(private list:UsersServiceService) { }
  
  ngOnInit(): void {
    this.userArray = this.list.getUsers();
    
   
  }

}
