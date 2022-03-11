import { PeopleComponent } from './components/people/people.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvComponent } from './components/tv/tv.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path :"home", canActivate:[AuthGuard] , component:HomeComponent},
  {path:"about" , canActivate:[AuthGuard] , component:AboutComponent},
  {path:"movies" , canActivate:[AuthGuard] , component:MoviesComponent},
  {path:"tv" , canActivate:[AuthGuard] , component:TvComponent},
  
  {path:"moviedetails/:id" , canActivate:[AuthGuard] , component:MoviedetailsComponent},

  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"people" , canActivate:[AuthGuard] , component:PeopleComponent},
  {path:"**" ,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
