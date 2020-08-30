import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFromCmdComponent } from './comp-from-cmd.component';

describe('CompFromCmdComponent', () => {
  let component: CompFromCmdComponent;
  let fixture: ComponentFixture<CompFromCmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFromCmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFromCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
