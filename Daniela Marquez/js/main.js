//API TMDB

const API_KEY = 'api_key=2f4d40f87bf767762775ade984fbf9a0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url) {
    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    });
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">

        <div class="movie-info">
            <h3 class="title">${title}</h3>
        </div> 
        `
        main.appendChild(movieElement);
    });
}