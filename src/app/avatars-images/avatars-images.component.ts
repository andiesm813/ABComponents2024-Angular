import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-avatars-images',
  standalone: true,
  imports: [IGX_LIST_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent],
  templateUrl: './avatars-images.component.html',
  styleUrls: ['./avatars-images.component.scss']
})
export class AvatarsImagesComponent {}
