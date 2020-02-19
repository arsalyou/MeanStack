import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerbidplacedComponent } from './sellerbidplaced.component';

describe('SellerbidplacedComponent', () => {
  let component: SellerbidplacedComponent;
  let fixture: ComponentFixture<SellerbidplacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerbidplacedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerbidplacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
