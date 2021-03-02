import { Component, OnInit } from '@angular/core';
import { faPen, faPlus, faShareAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MyTeamsService } from 'src/app/services/my-teams.service';
import {Sort} from '@angular/material/sort';
import { Team } from 'src/app/models/team.model';
@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})

export class MyTeamsComponent implements OnInit {

  teams:Team[] = []
  sortedData: Team[] = []
  faPlus = faPlus
  faShare = faShareAlt
  faDelete = faTrash
  faPen = faPen

  constructor(private myTeamsService: MyTeamsService) { }

  ngOnInit() {
    this.myTeamsService.getTeams().subscribe(teams => {
      this.teams = teams
      this.sortedData = teams
    })
  }

  sortData(sort: Sort) {
    const data = this.teams.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'description': return this.compare(a.description, b.description, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  editTeam(team) {
    this.myTeamsService.editTeam(team.id)
  }

  deteleTeam(team) {
    this.myTeamsService.deleteTeam(team.id)
    this.ngOnInit();
  }

}




