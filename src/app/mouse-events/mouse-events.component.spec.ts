import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxIconButtonDirective, IGX_LIST_DIRECTIVES } from '@infragistics/igniteui-angular';
import { MouseEventsComponent } from './mouse-events.component';

describe('MouseEventsComponent', () => {
  let component: MouseEventsComponent;
  let fixture: ComponentFixture<MouseEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseEventsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxIconButtonDirective, IGX_LIST_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
