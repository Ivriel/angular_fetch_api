import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users:{id:string;name:string;email:string;age:number;died:boolean;}[] = [
    {
      id:'1',
      name:'forgotten',
      email:'forgotten@gmail.com',
      age:17,
      died:false
    },
    {
      id:'2',
      name:'sam',
      email:'sam@gmail.com',
      age:19,
      died:true
    },
    {
      id:'3',
      name:'john',
      email:'john@gmail.com',
      age:29,
      died:true
    },
    {
      id:'4',
      name:'doe',
      email:'doe@gmail.com',
      age:39,
      died:false
    }
  ]
}
