import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';
import { GeocodeService } from '../services/geocode.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  address = '';
  location: Location;
  loading: boolean;
  // google maps zoom level
  zoom: number = 14;
  
  // initial center position for the map
  lat: number = 4.624335;
  lng: number = -74.063644;
  formdata = {
    "UUID":(localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")).UUID+"":Math.random()+""),
    "address":"",
    "attachedUser":"",
    "description":"",
    "expirationDate":"",
    "idUser":"",
    "image":"",
    "lat":"",
    "lng":"",
    "status":"",
    "title":"",
    "type":"Donar", 
  };
  constructor(private postService:PostServiceService,    private geocodeService: GeocodeService,
    ) { }
  
  ngOnInit() {
  }
  
  savePost(){
    this.formdata.image =  JSON.stringify(JSON.parse(localStorage.getItem('images')) || []);
    this.formdata.status = "1";
    this.postService.addPost(this.formdata);
    alert("Tu(s) producto(s) han sido posteados");
  }


  addressToCoordinates(){
    this.geocodeService.geocodeAddress(this.address)
    .subscribe((location: Location) => {
        this.location = location;
        this.loading = false;
        console.log(location);
        this.lat = location["lat"];
        this.lng = location["lng"];
        this.formdata.lat = location["lat"];
        this.formdata.lng = location["lng"];
        // this.formdata
      }      
    ); 
  }
}
