import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private db: AngularFirestore) {
  

  }


  getUser(uuid:string){
    return this.db.collection('users', ref => ref.where('UUID', '==', uuid)).valueChanges();
  }


  addUserInfo(data:any){
    this.db.collection("users").add(data);
  }

}
