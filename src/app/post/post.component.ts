import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';
import { EventsService } from '../services/events.service';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public postService: PostServiceService, public eventService: EventsService, public userService: UserServiceService) { }
  posts = [];
  cardOpen: any;
  showDetailCard = false;
  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
  async selectedCard(card){
    this.cardOpen = card;
    this.showDetailCard = true;
    await this.userService.getUser(this.cardOpen.UUID).subscribe(data => {
      this.cardOpen.user = data;
      console.log(this.cardOpen.user);
    });
  }
}
