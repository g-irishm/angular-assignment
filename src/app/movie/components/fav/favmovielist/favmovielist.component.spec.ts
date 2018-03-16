import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavmovielistComponent } from './favmovielist.component';

describe('FavmovielistComponent', () => {
  let component: FavmovielistComponent;
  let fixture: ComponentFixture<FavmovielistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavmovielistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavmovielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
