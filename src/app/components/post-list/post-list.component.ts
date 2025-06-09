import { Component,OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  standalone:true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts:Post[] = []

  constructor(private postService:PostService){}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data=> {
      this.posts = data
      console.log(this.posts)
    })
  }
}
