import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesList:any[]=[];

  imgPrefix : string='https://image.tmdb.org/t/p/w500';
  constructor(private MoviesService:MoviesService) {

   }

  ngOnInit(): void {
    this.MoviesService.getTrending('movie').subscribe((res)=>{
      this.moviesList = res.results
    })
  }

}
