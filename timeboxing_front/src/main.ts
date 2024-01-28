import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

globalThis.serverAddress = "http://127.0.0.1:8080/";

globalThis.formatDate = function (date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
