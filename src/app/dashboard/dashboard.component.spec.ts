import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import {HeroService} from "../hero.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {MessageService} from "../message.service";
import {RouterModule} from "@angular/router";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      RouterModule],
      declarations: [ DashboardComponent ],
      providers: [ HeroService , HttpClient , HttpHandler , MessageService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    spyOn(component, 'ngOnInit').and.callThrough();
    spyOn(component, 'getHeroes').and.callThrough();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit', () => {
    expect(component.ngOnInit).toHaveBeenCalled();
  });
  it('heroes should be defined', () => {
    expect(component.heroes).toBeDefined();
  });

});
