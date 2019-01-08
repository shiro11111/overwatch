import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './profile/profile.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ProfileEffects
    ])
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
