import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestsearchComponent } from './restsearch.component';

describe('RestsearchComponent', () => {
  let component: RestsearchComponent;
  let fixture: ComponentFixture<RestsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
