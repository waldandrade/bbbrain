import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material';
import { WorkspaceComponent } from './bbbrain/workspace/workspace.component';
import { BrainComponent } from './bbbrain/brain/brain.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { WebsiteComponent } from './website/website.component';
import { BbbrainComponent } from './bbbrain/bbbrain.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    BrainComponent,
    WebsiteComponent,
    BbbrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
