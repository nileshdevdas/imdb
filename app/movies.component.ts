import { Component, OnInit } from '@angular/core';
import {MoviesService} from './movies.service';
@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html',
    providers : [MoviesService]
})
export class MoviesComponent implements OnInit {
    movies : Movie[] ; 
    constructor(moviesService: MoviesService) { 
        //console.log("movies component loaded ......")
        this.movies = moviesService.getMovies();
        //console.log(this.movies)
    }
    ngOnInit() { 
        //console.log("Initialized....")
    }
}
export class Movie{
    name : string; 
    year : string; 
    category : string;
}
