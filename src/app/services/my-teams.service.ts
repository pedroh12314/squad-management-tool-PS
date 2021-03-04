import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class MyTeamsService {
  url = 'https://my-json-server.typicode.com/pedroh12314/squad-management-tool-PS'
   
  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    return this.http.get(`${this.url}/teams`)
  }

  createTeam(team: Team) {
    const id = new Date
    this.http.put(`${this.url}/teams}`, team)
  }

  editTeam(team: Team) {
    console.log(`${this.url}/teams/${team.id}`)
    this.http.put(`${this.url}/teams/${team.id}`, team)
  }

  deleteTeam(id: string) {
    this.http.delete(`${this.url}/teams/${id}`).subscribe(
    _ => console.log("Excluido")
    )
  }
}

class Teams {
  name: string;
  description: number;
}
