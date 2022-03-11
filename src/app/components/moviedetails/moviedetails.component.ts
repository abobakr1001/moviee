import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  id:string ='';
  movieDetails:any = {};
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _activateroute:ActivatedRoute, private _MoviesService:MoviesService) {
    this.id = _activateroute.snapshot.params.id;
    _MoviesService.getMovieDetails(this.id).subscribe((res)=>{
      this.movieDetails = res
    })
  }

  ngOnInit(): void {
  }

}
