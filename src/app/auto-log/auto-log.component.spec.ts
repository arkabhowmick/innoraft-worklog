import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLogComponent } from './auto-log.component';

describe('AutoLogComponent', () => {
  let component: AutoLogComponent;
  let fixture: ComponentFixture<AutoLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
