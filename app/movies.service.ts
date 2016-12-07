import { Injectable } from '@angular/core';
import { Movie } from './movies.component';

@Injectable()
export class MoviesService {
    listMovies: Movie[] = [];
    getMovies(): Movie[] {
        //console.log("Getting Services from .............")
        if (this.listMovies.length == 0) {
            for (let i = 0; i < 100; i++) {
                //console.log(i);
                let movie = new Movie();
                movie.name = "nilesh" + i;
                movie.category = "category" + i;
                this.listMovies.push(movie);
            }
        }
        return this.listMovies;
    }
}
