import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoerPlusComponent } from './doer-plus.component';

describe('DoerPlusComponent', () => {
  let component: DoerPlusComponent;
  let fixture: ComponentFixture<DoerPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoerPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoerPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
