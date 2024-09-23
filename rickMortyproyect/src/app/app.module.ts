import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CharacterpageService } from './characterpage.service';
import { EpisodiesComponent } from './episodies/episodies.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    HomeComponent,
    ProfileComponent,
    EpisodiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
