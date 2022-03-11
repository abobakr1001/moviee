import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnInit {
  trendingMovies:any[] =[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private MoviesService:MoviesService) {

    this.MoviesService.getTrending('movie').subscribe((data)=>{
      this.trendingMovies = data.results
    })

   }

   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:8,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

}
