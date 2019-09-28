import { Component, OnInit, Input, Output } from '@angular/core';
import { EventsService } from '../services/events.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: any;
  @Output() returnPost: any = new EventEmitter();
  constructor(public eventService: EventsService) { }

  ngOnInit() {
    if (this.post.image) {
      this.post.image = JSON.parse(this.post.image)[0];
    }
  }
  openDetail(post) {
    this.returnPost.emit(post);
  }


}
