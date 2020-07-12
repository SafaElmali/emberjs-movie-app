import Route from '@ember/routing/route';
import ENV from 'movie-app/config/environment';
import fetch from 'fetch';

const POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${ENV.MOVIEDB_API_KEY}&language=en-US&page=1`

export default class MoviesRoute extends Route {
    model() {
        return fetch(POPULAR_MOVIES)
            .then(response => {
                return response.json()
            })
    }
}