import { Component, OnInit } from '@angular/core';
import { AKTUELLPOSTS } from '../aktuellPosts';
import { AktuellPost } from '../aktuellPost';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  posts = AKTUELLPOSTS;
  post: AktuellPost;

  constructor() { }

  ngOnInit(): void {
  }

}
