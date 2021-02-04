import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoPageComponent } from './person-info-page.component';

describe('PersonInfoPageComponent', () => {
  let component: PersonInfoPageComponent;
  let fixture: ComponentFixture<PersonInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
