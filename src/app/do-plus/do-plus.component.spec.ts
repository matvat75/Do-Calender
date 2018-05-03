import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoPlusComponent } from './do-plus.component';

describe('DoPlusComponent', () => {
  let component: DoPlusComponent;
  let fixture: ComponentFixture<DoPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
