import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bookmark} from './bookmark';


@Injectable()
export class BookmarkService {

  constructor(private httpClient: HttpClient) { }

  getBookmarks(): Bookmark[] {
    const bookmarks: Bookmark[] = [];
    this.httpClient.get<Bookmark[]>("/api/bookmarks")
      .subscribe(
        data => bookmarks.push(...data),
        err => {
          if(err && err.error && err.error.reason){
            alert(err.error.reason)
          }
        }
      );
    return bookmarks;
  }

  getBookmarkById(bookmarkId: number): Bookmark {
    const bookmark: Bookmark = <Bookmark> {};
    this.httpClient.get<Bookmark>(`/api/bookmarks/${bookmarkId}`)
      .subscribe(
        data => Object.assign(bookmark, data),
        err => {
          if(err && err.error && err.error.reason){
            alert(err.error.reason)
          }
        }
      );
    return bookmark;
  }

  saveBookmark(bookmark: Bookmark): string {
    this.httpClient.post('/api/bookmarks', bookmark)
      .subscribe(
        data => {
          Object.assign(bookmark, data);
          alert("Bookmark Saved!")
          return 'Saved';
        },
        err => {
          if(err && err.error && err.error.reason){
            alert(err.error.reason)
          }
        }
      );
      return 'Saved';
  }

  deleteBookmark(bookmarkId: number): void{
    this.httpClient.delete(`/api/bookmarks/${bookmarkId}`)
    .subscribe(
      data => alert("Deleted Successfully."),
      err => {
        if(err && err.error && err.error.reason){
          alert(err.error.reason)
        }
      }
    );
  }
}