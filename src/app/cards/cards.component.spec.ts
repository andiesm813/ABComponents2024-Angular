import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxDividerDirective } from '@infragistics/igniteui-angular';
import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxDividerDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
