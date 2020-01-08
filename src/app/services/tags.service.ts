import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Section } from '../models/section';
import { map } from 'rxjs/operators';

@Injectable()
export class TagsService {
  private sectionCollection: AngularFirestoreCollection<Section>;

  constructor(private afs: AngularFirestore) {
    this.sectionCollection = this.afs.collection<Section>('tags');
  }

  getItems() {
    console.log('get items called');
    return this.sectionCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Section;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
