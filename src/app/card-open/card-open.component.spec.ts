import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOpenComponent } from './card-open.component';

describe('CardOpenComponent', () => {
  let component: CardOpenComponent;
  let fixture: ComponentFixture<CardOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
