import { Component, OnInit } from '@angular/core';
import { AKTUELLPOSTS } from '../aktuellPosts';
import { AktuellPost } from '../aktuellPost';

@Component({
  selector: 'app-aktuell',
  templateUrl: './aktuell.component.html',
  styleUrls: ['./aktuell.component.css']
})
export class AktuellComponent implements OnInit {
  posts = AKTUELLPOSTS;
  post: AktuellPost;
  
  constructor() { }

  ngOnInit(): void {
  }

}
