import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualComponentComponent } from './manual-component/manual-component.component';
import { CliComponentComponent } from './cli-component/cli-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualComponentComponent,
    CliComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
