import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavrestComponent } from './favrest.component';

describe('FavrestComponent', () => {
  let component: FavrestComponent;
  let fixture: ComponentFixture<FavrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
