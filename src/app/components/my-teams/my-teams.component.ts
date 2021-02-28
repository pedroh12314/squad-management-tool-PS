import { Component, OnInit } from '@angular/core';
import { faPen, faPlus, faShareAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent implements OnInit {

  teams = TEAMS
  faPlus = faPlus;
  faShare = faShareAlt
  faDelete = faTrash
  faPen = faPen


  constructor() { }

  ngOnInit(): void {
  }

}

interface Teams {
  name: string;
  description: string;
}

const TEAMS: Teams[] = [
  {
    name: 'Russia',
    description: 'Russiaaass',
  },
  {
    name: 'Canada',
    description: 'dsdsd',
  },
  {
    name: 'United States',
    description: 'asdasda',
  },
  {
    name: 'China',
    description: 'asdasdadada',
  }
];


