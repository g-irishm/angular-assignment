import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavnewslistComponent } from './favnewslist.component';

describe('FavnewslistComponent', () => {
  let component: FavnewslistComponent;
  let fixture: ComponentFixture<FavnewslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavnewslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavnewslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
