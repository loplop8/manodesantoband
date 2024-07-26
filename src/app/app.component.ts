import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainSectionComponent } from './main-section/main-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MusicComponent } from './music/music.component';


import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainSectionComponent,AboutUsComponent,MusicComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mano de Santo Band';
}
