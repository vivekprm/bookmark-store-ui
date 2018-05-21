import { Component, OnInit } from '@angular/core';
import {BookmarkService} from '..//shared/bookmark.service';
import {Bookmark} from '..//shared/bookmark';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
  styleUrls: ['./bookmark-detail.component.css']
})
export class BookmarkDetailComponent implements OnInit {

  bookmark: Bookmark;

  constructor(private route: ActivatedRoute, private bookmarkService: BookmarkService) {}

  ngOnInit() {
    let bookmarkId: number = parseInt(this.route.snapshot.params['bookmarkId']);
    this.bookmark = this.bookmarkService.getBookmarkById(bookmarkId);
  }

  onSubmit(bookmarkId){
    console.log(bookmarkId);
    this.bookmarkService.deleteBookmark(bookmarkId);
  }

}
