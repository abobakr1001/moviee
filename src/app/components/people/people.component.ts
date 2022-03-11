import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPeople:any[]=[];

  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.MoviesService.getTrending('person').subscribe((res)=>{
          this.trendingPeople = res.results;
    })
  }

}
