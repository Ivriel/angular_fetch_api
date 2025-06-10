import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from '../models/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/albums'
  constructor(private http:HttpClient) { }

  getAlbums():Observable<Albums[]> {
    return this.http.get<Albums[]>(this.apiUrl)
  }
}
