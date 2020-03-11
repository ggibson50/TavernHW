import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgModule, NgbCarouselConfig],
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

export class NgbdCarouselNavigation {
  //images = [1055, 194, 368].map((n) => `https://via.placeholder.com/250x250`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
  }
}