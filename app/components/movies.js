import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'movie-app/config/environment';

import fetch from 'fetch';

const POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${ENV.MOVIEDB_API_KEY}&language=en-US`
const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${ENV.MOVIEDB_API_KEY}&language=en-US&page=1&include_adult=false`;

export default class MoviesComponent extends Component {
    @tracked movies = [];
    @tracked value;
    page = 1;

    constructor() {
        super(...arguments);
        this.fetchPopularMovies()
    }

    // User input update value
    @action
    updateValue(event) {
        this.value = event.target.value;
    }

    // Get user searched movie list
    @action
    handleClick(event) {
        event.preventDefault();
        if (!this.value) return;

        fetch(SEARCH_MOVIE + `&query=${this.value}`)
            .then(response => {
                response.json().then(data => this.movies = data.results)
            });

        this.value = '';
    }

    @action
    fetchPopularMovies() {
        fetch(POPULAR_MOVIES + `&page=${this.page}`).then(response => {
            response.json().then(data => this.movies = [...this.movies, ...data.results]);
        });
        this.page += 1;
    }
}