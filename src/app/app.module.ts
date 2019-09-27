import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { LogViewComponent } from './log-view/log-view.component';
import { ManualLogComponent } from './manual-log/manual-log.component';
import { AutoLogComponent } from './auto-log/auto-log.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    LogViewComponent,
    ManualLogComponent,
    AutoLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
