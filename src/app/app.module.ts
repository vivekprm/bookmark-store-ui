import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe} from './shared/filter.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookmarkItemComponent } from './bookmark-item/bookmark-item.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
import { FooterComponent } from './footer/footer.component';
import { BookmarkService } from './shared/bookmark.service';
import { BookmarkCreateComponent } from './bookmark-create/bookmark-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BookmarkItemComponent,
    BookmarkDetailComponent,
    FooterComponent,
    BookmarkCreateComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'bookmarks',                    component: HomeComponent},
      {path: 'bookmarks/:bookmarkId', component: BookmarkDetailComponent},
      {path: '', component: BookmarkCreateComponent}
    ]),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
