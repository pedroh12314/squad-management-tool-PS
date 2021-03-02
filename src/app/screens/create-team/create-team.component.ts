import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/models/team.model';

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
  tags

  title:string = 'Create your team'

  newTag: string = ''

  faTimes = faTimes

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if(this.route.snapshot['params']['name'] != undefined){
      this.title = 'Edit your team'
      this.team = this.route.snapshot['params'] // ver para escrita, nao so leitura
      this.tags = this.route.snapshot['params']['tags'].split(",")
    }
  }

  deleteTag(tag) {
    this.team.tags.splice(this.team.tags.indexOf(tag), 1)
  }

  addNewTag(value: KeyboardEvent) {

    if ((value.key == ';' || value.key == 'Enter') && this.newTag != '') {

      if (value.key == ';') {
        this.newTag = this.newTag.substring(0, this.newTag.length - 1)
        console.log(this.newTag.length)
      }
      this.team.tags.push(this.newTag)
      this.newTag = ''
    }

  }

  onSave() {
  }

}
