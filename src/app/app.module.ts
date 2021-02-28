import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CreateYourTeamComponent } from './components/create-your-team/create-your-team.component';
import { HomeComponent } from './screens/home/home.component';
import { MyTeamsComponent } from './components/my-teams/my-teams.component';
import { TopFiveComponent } from './components/top-five/top-five.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InsightPlayersComponent } from './components/insight-players/insight-players.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CreateTeamComponent } from './screens/create-team/create-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateYourTeamComponent,
    HomeComponent,
    MyTeamsComponent,
    TopFiveComponent,
    InsightPlayersComponent,
    FooterComponent,
    CreateTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
