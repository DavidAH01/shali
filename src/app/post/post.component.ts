import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }
  fakes = [
    {
      name: 'test 1'
    },
    {
      name: 'test 2'
    },
    {
      name: 'test 3'
    },
    {
      name: 'test 4'
    }
  ]
  ngOnInit() {
  }

}
