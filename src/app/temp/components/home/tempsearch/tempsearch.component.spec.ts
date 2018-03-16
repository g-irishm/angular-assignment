import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsearchComponent } from './tempsearch.component';

describe('TempsearchComponent', () => {
  let component: TempsearchComponent;
  let fixture: ComponentFixture<TempsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
