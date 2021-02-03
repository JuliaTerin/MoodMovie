import { getMovies } from "../../services/index.js"

export default async () => {
    const container = document.createElement('section');

    let genres = window.location.hash.substring(window.location.hash.indexOf('?genre=') + '?genre='.length).split(',')
    
    container.innerHTML = `
        <header>
            <h2 class="title-movies">Achamos que vai gostar dessa seleção que fizemos para você <img class="logo-github" src="img/favourite.png" alt="logo github"></h2>
        </header>
    `;

    const data = await Promise.all(genres.map(genre => getMovies(genre)))
    let child = showingMoviesList(data.flat())
    
    container.innerHTML += child;
    
    return container
}

const showingMoviesList = (movies) => {
    let moviesList = "<div>"
    for (let movie of movies) {
        
        moviesList += `
            <div class="movie-details" id="${movie.id}">
                <header>
                    <img src = ${movie.poster} class ="movie-poster" alt = ${movie.title}/>
                    <p><img class="logo-github" src="img/star.png" alt="logo github">${movie.imdb_rating}</p>
                    <h1 class="strong-text">${movie.title}</h1>
                </header>
                <article>
                    <h2 class="strong-text">Sinopse:</h2>
                    <p >${movie.overview}</p>
                    <h2 class="strong-text">Gênero:</h2>
                    <p movie-strong-text__gender>${movie.genres}</p>
                    <h2 class="strong-text">Duração:</h2>
                    <p>${movie.time}</p>
                    <h2 class="strong-text">Lançamento:</h2>
                    <p movie-strong-text__released>${movie.released_on}</p>
                    <h2 class="strong-text">Onde assistir:</h2>
                    <p>${movie.sources}</p>
                </article>
            </div>
        `}
    moviesList += "</div>"
    return moviesList
} 
