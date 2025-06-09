import { Component,OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  standalone:true,
  imports: [],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent implements OnInit {
  comments:Comment[] = []

  constructor(private commentService: CommentService){}

  ngOnInit(): void {
    this.commentService.getComments().subscribe(
      data=> {
        this.comments = data.splice(0,100)
        console.log(this.comments)
      }
    )
  }
}
