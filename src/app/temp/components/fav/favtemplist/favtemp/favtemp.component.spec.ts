import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavtempComponent } from './favtemp.component';

describe('FavtempComponent', () => {
  let component: FavtempComponent;
  let fixture: ComponentFixture<FavtempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavtempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
