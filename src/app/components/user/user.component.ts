import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  id:string|null=""
  name:string|null=""
  email:string|null=""
  age:number|null=null
  died:boolean|null=null
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void{
    this.route.params.subscribe((params)=> {
      this.id = params['id']
      this.name = params['name']
      this.email = params['email']
      this.age = params['age']
      this.died = params['died'] === 'true' // agar data yang di passing lewat URL  benar benar boolean dan bukan string
    })
  }

}
