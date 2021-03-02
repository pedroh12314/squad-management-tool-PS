import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTeamsService {
  url = 'http://localhost:3000'
   
  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    return this.http.get(`${this.url}/teams`)
  }

  editTeam(team) {
    console.log(team)
   this.http.put(`${this.url}/teams/${team.id}`, {
    id: "team.id",
    name: "team.name",
    description: "team.description"
   })
   //this.http.get(`${this.url}/teams`).subscribe(u => console.log(u))
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
