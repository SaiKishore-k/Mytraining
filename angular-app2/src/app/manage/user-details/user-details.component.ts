import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
userArray :any;
constructor(private list:UsersServiceService) { }
show:boolean = false;
ngOnInit(): void {
  this.userArray = this.list.getUsers();
}

selectedUser?: any;

onSelect(user: any): void {
this.selectedUser = user;
}


}
