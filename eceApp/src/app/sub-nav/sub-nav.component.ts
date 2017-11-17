import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubNavComponent implements OnInit {

  constructor(private location: Location) { 
    
  }
  goBack() {
    this.location.back();
}

  ngOnInit() {
  }

}
