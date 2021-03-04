import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './screens/home/home.component';
import { MyTeamsComponent } from './components/my-teams/my-teams.component';
import { TopFiveComponent } from './components/top-five/top-five.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InsightPlayersComponent } from './components/insight-players/insight-players.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CreateTeamComponent } from './screens/create-team/create-team.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
