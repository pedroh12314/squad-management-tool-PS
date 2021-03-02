import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insight-players',
  templateUrl: './insight-players.component.html',
  styleUrls: ['./insight-players.component.css']
})
export class InsightPlayersComponent implements OnInit {

  name: string = "Pedro Henrique Lemes"

  constructor() { }

  ngOnInit(): void {}

  getInitials(name){
    const fullName = name.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }

}
