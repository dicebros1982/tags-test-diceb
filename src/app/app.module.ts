import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "./modules/core/core.module";

import { AppComponent } from "./app.component";
import { TagsListComponent } from "./components/tags-list/tags-list.component";
import { TagsService } from "./services/tags.service";

import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ParentTagComponent } from './components/parent-tag/parent-tag.component';
import { ChildTagComponent } from './components/child-tag/child-tag.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [AppComponent, TagsListComponent, ParentTagComponent, ChildTagComponent],
  bootstrap: [AppComponent],
  providers: [TagsService]
})
export class AppModule {}
