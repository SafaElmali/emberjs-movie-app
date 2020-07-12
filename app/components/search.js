import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'movie-app/config/environment';
import fetch from 'fetch';

const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${ENV.MOVIEDB_API_KEY}&language=en-US&page=1&include_adult=false`;

export default class SearchComponent extends Component {
    @tracked value;

    @action
    updateValue(event) {
        this.value = event.target.value;
    }

    @action
    handleClick(event) {
        event.preventDefault();
        if (!this.value) return;
        
        fetch(SEARCH_MOVIE + `&query=${this.value}`)
            .then(response => {
                return response.json()
            })
        this.value = '';
    }
}