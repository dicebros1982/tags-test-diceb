import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './modules/core/core.module';

import { AppComponent } from './app.component';
import { TagsListComponent } from './components/main-tag-list/tags-list/tags-list.component';
import { TagsService } from './services/tags.service';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ParentTagComponent } from './components/main-tag-list/parent-tag/parent-tag.component';
import { ChildTagComponent } from './components/main-tag-list/child-tag/child-tag.component';
import { MainTagListComponent } from './components/main-tag-list/main-tag-list.component';
import { TagsAdminComponent } from './components/tags-admin/tags-admin.component';
import { CreateFormComponent } from './components/tags-admin/create-form/create-form.component';
import { SubColComponent } from './components/sub-col/sub-col.component';
import { SubColListComponent } from './components/sub-col/sub-col-list/sub-col-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    TagsListComponent,
    ParentTagComponent,
    ChildTagComponent,
    MainTagListComponent,
    TagsAdminComponent,
    CreateFormComponent,
    SubColComponent,
    SubColListComponent
  ],
  bootstrap: [AppComponent],
  providers: [TagsService]
})
export class AppModule {}
