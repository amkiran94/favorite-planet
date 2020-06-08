import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

class Planet {
  id: string;
  isFavorite: boolean;
  name: string;

  constructor(id: string, isFavorite: boolean, name: string) {
    this.id = id;
    this.isFavorite = isFavorite;
    this.name = name;
  }
}

@Component({
  selector: 'planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  
  planetsGroup: FormGroup;
  planets: Planet[] = [];
  msg: string = '';

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.msg ='';
    this.planetsGroup = this.formBuilder.group({
      planetsArray: this.formBuilder.array([])
    });

    this.getDataFromServer();
  }

  getDataFromServer() {
    this.httpClient.get('https://assignment-machstatz.herokuapp.com/planet').subscribe((data: any[]) => {
      console.log(data);
      data.forEach(planet => {
        this.planets.push(new Planet(planet.id, planet.isFavorite, planet.name));
      });
    });
  }

  onChange(event: Event) {
    let target: any = event.target;
    console.log(target.value +" "+target.checked);

    const planetsArray: FormArray = this.planetsGroup.get('planetsArray') as any;

    if (target.checked) {
      planetsArray.push(new FormControl(target.value));
    } else {
      let i = 0;
      planetsArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === target.value ) {
          planetsArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  markAsFavorites() {
    const favPlanets = this.planetsGroup.value;

    // Sets the planets which are marked as favorites to session storage
    sessionStorage.setItem('fav-planets', JSON.stringify(favPlanets));
    this.msg = 'Successfully marked';
  }
}
