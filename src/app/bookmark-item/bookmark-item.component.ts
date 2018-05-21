import { Component, OnInit, Input } from '@angular/core';
import {Bookmark} from '../shared/bookmark';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.css']
})
export class BookmarkItemComponent {

  @Input() bookmark: Bookmark;

}
