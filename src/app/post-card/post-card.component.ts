import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: any;

  constructor() { }

  ngOnInit() {
    if (this.post.image) {
      this.post.image = JSON.parse(this.post.image)[0];
    }
  }

}
