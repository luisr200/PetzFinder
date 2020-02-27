import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { HttpClientModule } from '@angular/common/http';
import { TagComponent } from './tag/tag.component';
import { OAuthModule } from 'angular-oauth2-oidc';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
