import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProgressBarDeterminateComponent } from './progress-bar-determinate/progress-bar-determinate.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProgressBarDeterminateComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
