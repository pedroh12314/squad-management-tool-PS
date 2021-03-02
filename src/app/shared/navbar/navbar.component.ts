import { Component, OnInit } from '@angular/core';
import { faArrowDown, faSortAmountDown, faSortDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name: string = "Pedro Henrique Lemes"

  faUser = faUserCircle

  constructor() { }

  ngOnInit(): void {
  }

  getInitials(name){
    const fullName = name.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }
}
