const fetchMovies = async (title) => {
  fetch(`http://www.omdbapi.com/?apikey=949bc8df&t=${title}`)
    .then((response) => response.json())
    .then((result) => movieArray.push(result))
    .catch((err) => console.log(err));
};

const movieArray = [];

const searchBox = document.getElementById("search-input");
const movies = document.createElement("div");
movies.id = "movies-set";
document.body.appendChild(movies);

searchBox.addEventListener("input", (val) => {
  fetchMovies(val.target.value);

  movieArray.map((val, id) => {
    const movieCard = document.createElement("div");
    movieCard.id = `movie-card${id}`;
    document.getElementById("movies-set").appendChild(movieCard);

    const image = document.createElement("img");
    image.id = "movie-image";
    image.src = val.Poster;

    const title = document.createElement("div");
    title.id = "movie-title";
    title.innerText = val.Title;

    const button = document.createElement("button");
    button.id = "movie-button";
    button.innerText = "Watch Now";

    document.getElementById(`movie-card${id}`).appendChild(image);
    document.getElementById(`movie-card${id}`).appendChild(title);
    document.getElementById(`movie-card${id}`).appendChild(button);
  });
});
