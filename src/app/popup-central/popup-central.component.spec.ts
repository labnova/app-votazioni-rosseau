import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCentralComponent } from './popup-central.component';

describe('PopupCentralComponent', () => {
  let component: PopupCentralComponent;
  let fixture: ComponentFixture<PopupCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
