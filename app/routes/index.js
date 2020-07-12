import Route from '@ember/routing/route';
import ENV from 'movie-app/config/environment';
import fetch from 'fetch';

const TREND_MOVIES = `https://api.themoviedb.org/3/trending/all/day?api_key=${ENV.MOVIEDB_API_KEY}`;

export default class IndexRoute extends Route {
    model() {
        return fetch(TREND_MOVIES)
            .then(response => {
                return response.json()
            })
    }
}