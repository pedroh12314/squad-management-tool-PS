import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/models/team.model';
import { map } from 'rxjs/operators';
import { MyTeamsService } from 'src/app/services/my-teams.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  
  team: Team = {
    name: '',
    description: '',
    website: '',
    type:'',
    tags: [],
    formation: ''
  } as Team

  title: string = 'Create your team'

  isEdit: boolean = false

  saveTouched: boolean = false

  newTag: string = ''

  faTimes = faTimes

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private myTeams: MyTeamsService
    ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(() => window.history.state)
      )
      .subscribe(state => {
        if (state.data != undefined) {
          this.team = state.data
          this.title = "Edit your Team"
          this.isEdit = true
        }
      });
  }

  deleteTag(tag) {
    this.team.tags.splice(this.team.tags.indexOf(tag), 1)
  }

  addNewTag(value: KeyboardEvent) {

    if ((value.key == ';' || value.key == 'Enter') && this.newTag != '') {

      if (value.key == ';') {
        this.newTag = this.newTag.substring(0, this.newTag.length - 1)
      }
      this.team.tags.push(this.newTag)
      this.newTag = ''
    }

  }

  onSave(form: NgForm) {
    if (form.valid){
      if (this.isEdit) {
        this.myTeams.editTeam(this.team)
      }else {
        this.myTeams.createTeam(this.team)
      }
      this.router.navigate(['home'])
    } else {
      this.saveTouched = true
    }
  }

}
