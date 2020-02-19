import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamreportsComponent } from './spamreports.component';

describe('SpamreportsComponent', () => {
  let component: SpamreportsComponent;
  let fixture: ComponentFixture<SpamreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpamreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpamreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
