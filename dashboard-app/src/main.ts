import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations'; // Import this line

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes), provideAnimations()], // Add BrowserAnimationsModule in providers
});
