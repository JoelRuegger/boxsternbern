import { Component, OnInit } from '@angular/core';
import { AKTUELLPOSTS } from '../aktuellPosts';
import { AktuellPost } from '../aktuellPost';

@Component({
  selector: 'app-aktuell-alt',
  templateUrl: './aktuell-alt.component.html',
  styleUrls: ['./aktuell-alt.component.css']
})
export class AktuellAltComponent implements OnInit {
  posts = AKTUELLPOSTS;
  post: AktuellPost;
  
  constructor() { }

  ngOnInit(): void {
  }

}
