import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlanetsComponent } from './favorite-planets.component';

describe('FavoritePlanetsComponent', () => {
  let component: FavoritePlanetsComponent;
  let fixture: ComponentFixture<FavoritePlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
