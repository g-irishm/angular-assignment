import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavtemplistComponent } from './favtemplist.component';

describe('FavtemplistComponent', () => {
  let component: FavtemplistComponent;
  let fixture: ComponentFixture<FavtemplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavtemplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavtemplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
