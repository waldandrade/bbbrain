import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbbrainComponent } from './bbbrain.component';

describe('BbbrainComponent', () => {
  let component: BbbrainComponent;
  let fixture: ComponentFixture<BbbrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbbrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbbrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
