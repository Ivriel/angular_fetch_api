import { Component,OnInit } from '@angular/core';
import { Albums } from 'src/app/models/albums';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums',
  standalone:true,
  imports: [],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums:Albums[] = []

  constructor(private service:AlbumsService){}
  ngOnInit(): void {
    this.service.getAlbums().subscribe(data=> {
      this.albums = data
    })
  }
}
