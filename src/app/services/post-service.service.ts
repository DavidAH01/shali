import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private db: AngularFirestore) {
  }


  addPost(data:any){
    console.log("add item",data)
    this.db.collection("posts").add(data).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });;
  }
  
  getPosts(){
    return this.db.collection("posts").valueChanges();
  }
}
