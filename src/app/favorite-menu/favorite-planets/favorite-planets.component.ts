import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-planets',
  templateUrl: './favorite-planets.component.html',
  styleUrls: ['./favorite-planets.component.css']
})
export class FavoritePlanetsComponent implements OnInit {

  favoritePlanets: string[];

  constructor() { }

  ngOnInit(): void {
    // Gets all the planets marked as favorites from thhe session storage
    const planets = JSON.parse(sessionStorage.getItem('fav-planets'));
    this.favoritePlanets = planets.planetsArray;
  }

}
