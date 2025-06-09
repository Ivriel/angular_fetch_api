import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-list',
  standalone:true,
  imports: [RouterLink,ButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
    users: User[] = []

    constructor(private userService: UserService){}
    ngOnInit(): void {
      this.userService.getUsers().subscribe(data=> {
        this.users= data
        console.log(this.users)
      })
    }
}
