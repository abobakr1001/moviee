import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HomeheaderComponent } from './components/homeheader/homeheader.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { NetworkComponent } from './components/network/network.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PeopleComponent } from './components/people/people.component';
import { RegisterComponent } from './components/register/register.component';

import { TvComponent } from './components/tv/tv.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    HomeheaderComponent,
    LoginComponent,
    MoviesComponent,
    MoviedetailsComponent,
    NetworkComponent,
    NotfoundComponent,
    PeopleComponent,
    RegisterComponent,
    TvComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
