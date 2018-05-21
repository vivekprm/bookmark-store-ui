import { Component, OnInit } from '@angular/core';
import {BookmarkService} from '..//shared/bookmark.service';
import {Bookmark} from '..//shared/bookmark';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookmark-create',
  templateUrl: './bookmark-create.component.html',
  styleUrls: ['./bookmark-create.component.css']
})
export class BookmarkCreateComponent{
  constructor(private route: ActivatedRoute, private bookmarkService: BookmarkService) {}
  onSubmit(formData){
    const bookmark: Bookmark = <Bookmark> {
      "title": formData.title,
      "url": formData.url,
      "notes": formData.notes.split(','),
      "tags": formData.tags.split(','),
    };
    console.log(formData);
    let saved = this.bookmarkService.saveBookmark(bookmark);
    if(saved === 'Saved'){
      formData = {};
    }
	}
}
