import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable()
export class TagsService {
  constructor(private afs: AngularFirestore) {}

  getItems() {
    console.log("get items called");
    return this.afs.collection("tags").valueChanges();
  }
}
