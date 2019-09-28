import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public postService: PostServiceService) { }
  posts = [];
  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
