import { Component, OnInit } from '@angular/core';
//import {particlesJS} from 'particles.js'

declare var particlesJS: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(): void {
    //particles
    particlesJS.load('particles-js', './assets/particles.json', null);
  }
}


