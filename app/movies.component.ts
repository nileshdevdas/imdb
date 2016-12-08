import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html',
    providers: [MoviesService]
})
export class MoviesComponent implements OnInit {
    movies: Movies = new Movies();
    mname: string;
    moviesService: MoviesService;
    constructor(moviesService: MoviesService) {
        this.moviesService = moviesService;
        moviesService.getMovies('S').subscribe(res => {
            console.log(res.Search);
            this.movies = res;
        });
    }
    ngOnInit() {
    }
    moviesFinder(): void {
        console.log("finder" + this.mname);
        this.moviesService.getMovies(this.mname).subscribe(res => {
            console.log(res.Search);
            
            this.movies = res;
        });
    }
}
export class Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
export class Movies {
    Search: Movie[] = [];
    totalResults: number;
    response: string;
}
