import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavrestlistComponent } from './favrestlist.component';

describe('FavrestlistComponent', () => {
  let component: FavrestlistComponent;
  let fixture: ComponentFixture<FavrestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavrestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavrestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
