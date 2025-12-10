const movieList = document.getElementById('movie-list');
const search = document.getElementById('search');
const main = document.getElementById('main');


search.addEventListener('input', (event) =>{
    const value = search.value.toLowerCase();
    const filtered = movies.filter(movie => {
        const title = movie.title.toLowerCase();
        const titleIncludes = title.includes(value);
        if(titleIncludes){
            return true;
        }

        const genre = movie.genre.toLowerCase();
        const genreIncludes = genre.includes(value);
        if(genreIncludes){
            return true;
        }

        const director = movie.director.toLowerCase();
        const directorIncludes = director.includes(value);
        if(directorIncludes){
            return true;
        }

        const fountCast = movie.cast.find( actor =>{
            const lowerCast = actor.toLowerCase();
            const actorIncludes = lowerCast.includes(value);
            return actorIncludes;
        })
        if(fountCast){
            return true;
        }
        return false;
    })
    console.log('filtered', filtered);
    movieList.innerHTML = '';
    displayMovies(filtered);
    })
function handleClick(title){
    const movie = movies.find(movie => {
        return movie.title === title;
    })
    console.log('clicked', movie);
    main.innerHTML = `
    <button onclick="window.location.reload()">Back</button>
    <h2>${movie.title}</h2>
    <img src="${movie.image}"/>
    <p>Genre: ${movie.genre}</p>
    <p>Director: ${movie.director}</p>
    <p>Year: ${movie.releaseYear}</p>
    <p>Plot: ${movie.plot}</p>
    <p>Cast: ${movie.cast.join(', ')}</p>
    `
}
function displayMovies(movies){
    movies.forEach(movie => {
    movieList.innerHTML += `
    <div class='movie-card' onclick = "handleClick('${movie.title}')">
        <h2>${movie.title}</h2>
        <img src='${movie.image}'/>
        <p>Genre: ${movie.genre}</p>
        <p>Director: ${movie.director}</p>
        <p>Year: ${movie.releaseYear}</p>
    </div>`
})
}
displayMovies(movies);