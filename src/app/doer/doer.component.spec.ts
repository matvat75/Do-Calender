import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoerComponent } from './doer.component';

describe('DoerComponent', () => {
  let component: DoerComponent;
  let fixture: ComponentFixture<DoerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
