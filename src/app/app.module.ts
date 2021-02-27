import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CreateYourTeamComponent } from './components/create-your-team/create-your-team.component';
import { HomeComponent } from './screens/home/home.component';
import { MyTeamsComponent } from './components/my-teams/my-teams.component';
import { TopFiveComponent } from './components/top-five/top-five.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateYourTeamComponent,
    HomeComponent,
    MyTeamsComponent,
    TopFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
