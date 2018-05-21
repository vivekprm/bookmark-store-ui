import {Component, OnInit} from '@angular/core';
import {Bookmark} from '../shared/bookmark';
import {BookmarkService} from '../shared/bookmark.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: String;
  bookmarks: Bookmark[]=[];
  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }
}