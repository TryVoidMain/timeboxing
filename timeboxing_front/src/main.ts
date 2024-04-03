import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

export const serverAddress = "http://127.0.0.1:8080/"; 


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));