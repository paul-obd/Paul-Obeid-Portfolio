import { Component, OnInit } from '@angular/core';
import {  Particles } from "../../../node_modules/particlesjs/dist/particles.min.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    Particles.init({
      selector: '.background'
    });
  }

}
