import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // <-- Import this
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [MatCardModule], // <-- Add MatCardModule here
})
export class SettingsComponent {
  settingsData = {
    theme: 'Dark Mode',
    notifications: 'Enabled',
    language: 'English',
  };
}
