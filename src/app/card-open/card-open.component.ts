import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-card-open',
  templateUrl: './card-open.component.html',
  styleUrls: ['./card-open.component.scss']
})
export class CardOpenComponent implements OnInit {

  constructor() { }
  @Input() cardOpen: any;
  user: any;
  openModals = false;
  openModalx = true;
  ngOnInit() {
    console.log(this.cardOpen);
  }
  openModal(bool) {
    this.openModals = bool;
    if (bool === false) {
      console.log("test")
      window.location.reload();
    }
  }

}
