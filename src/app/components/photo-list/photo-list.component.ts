import { Component,OnInit} from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-photo-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css'
})
export class PhotoListComponent implements OnInit{
  photos:Photo[] = []
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private photoService:PhotoService){}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(data=> {
      this.photos= data.slice(0,100) // tampilin 100 data doang dari API
      console.log(this.photos)
    })
  }

}
