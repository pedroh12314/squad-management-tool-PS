import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})

export class TopFiveComponent implements OnInit {

  highest: Team[]
  lowest: Team[]

  constructor() { }

  ngOnInit(): void {
    this.highest = [
      {name: "Colombia", age: 28.6},
      {name: "Argentina", age: 28.5},
      {name: "Irã", age: 28.4},
      {name: "Portugal", age: 28.1},
      {name: "Uruguai", age: 28.0},
    ]

    this.lowest = [
      {name: "Espanha", age: 27.7},
      {name: "Itália", age: 27.3},
      {name: "Brasil", age: 26.7},
      {name: "Inglaterra", age: 26},
      {name: "Alemanha", age: 25.8},
    ]
  }

}

interface Team {
  name: string,
  age: number,
}