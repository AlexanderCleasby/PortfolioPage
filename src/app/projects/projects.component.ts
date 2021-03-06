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
      {Name:'Your Timelog',Desc:"React app for tracking how users spend their time using a day planner and charts.  App served from Express, MongoDB used for the database, Google Oauth for authentication."
      ,Link:'https://your-timelog.herokuapp.com/',pic:'../assets/your-timelog.herokuapp.com_ScreenGrab.png'},

      {Name:'DCbustracker',Desc:"DC bus tracker is a SPA that uses the user's location to find nearby bus stops and get expected arrival times for buses destined for that stop.  Built on the Ionic framework.  Employs Google Maps api to display stops.  Can be added to a Chrome user's homepage to operate like a native app."
      ,Link:'https://www.dcbustracker.com/',pic:'../assets/dcbustracker.com_ScreenGrab.png'},

      {Name:'Web-Farkle',
      Desc:"Online multiplayer adaptation of folk dice game Farkle, powered by Node and websockets."+
      "  Supports multiple game rooms and players per game.",
      
    Link:'https://web-farkle.herokuapp.com/',pic:'../assets/web-farkle.herokuapp.com_ScreenGrab.png'}
    ]
    
   }

  ngOnInit() {
  }

}
