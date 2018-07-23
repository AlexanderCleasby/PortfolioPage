import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  Projects: {Name:string,Desc:string,Link:string,pic:string}[]
  constructor() {
    
    this.Projects=[
      {Name:'DCbustracker',Desc:"DC bus tracker is a SPA that uses the user's location to find nearby bus stops and get expected arrival times for buses destined for that stop.  Built on the Ionic framework.  Employs Google Maps api to display stops.  Can be added to a Chrome user's homepage to operate like a native app."
      ,Link:'https://dcbustracker.com/',pic:'../assets/dcbustracker.com_ScreenGrab.png'},

      {Name:'Web-Farkle',
      Desc:"Online multiplayer adaptation of folk dice game, Farkle powered by Node and websockets."+
      "  Supports multiple game rooms and players per game.  Game is playable, but as it stands the front end is"+
      " not so intuitive.  Work in progress.",
    Link:'https://web-farkle.herokuapp.com/',pic:'../assets/web-farkle.herokuapp.com_ScreenGrab.png'}
    ]
    
   }

  ngOnInit() {
  }

}
