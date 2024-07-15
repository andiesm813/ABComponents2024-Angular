import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxRadioComponent, IgxRadioGroupDirective } from '@infragistics/igniteui-angular';
import { RadiogroupComponent } from './radiogroup.component';

describe('RadiogroupComponent', () => {
  let component: RadiogroupComponent;
  let fixture: ComponentFixture<RadiogroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiogroupComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxRadioComponent, IgxRadioGroupDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiogroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
