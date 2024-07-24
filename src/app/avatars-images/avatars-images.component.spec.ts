import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxAvatarComponent, IGX_LIST_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { AvatarsImagesComponent } from './avatars-images.component';

describe('AvatarsImagesComponent', () => {
  let component: AvatarsImagesComponent;
  let fixture: ComponentFixture<AvatarsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarsImagesComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxAvatarComponent, IGX_LIST_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
