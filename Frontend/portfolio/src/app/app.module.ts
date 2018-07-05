import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes=[
  {path: '', component:LandingComponent},
  {path: 'projects',component:ProjectsComponent},
  {path: 'contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
