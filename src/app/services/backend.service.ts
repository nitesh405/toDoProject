import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private afs: AngularFirestore) { }

  getList() {

  }

  login(payload : any) {
    this.afs.collection('items').add(payload).then(res => {
      console.log(res)
    })
  }
}
