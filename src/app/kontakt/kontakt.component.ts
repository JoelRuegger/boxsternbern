import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  lat = 46.954693;
  lng = 7.452173;
  constructor() { }

  ngOnInit(): void {
  }

}
