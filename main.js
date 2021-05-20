const main = document.getElementById("main");
const sections = document.querySelectorAll("section");
const dailyTrendingMoviesSection = document.querySelector(
  ".daily-trending-movies"
);
const best2021MoviesSection = document.querySelector(".best-movies-2021");
const topRatedMoviesSection = document.querySelector(".top-rated-movies-TMDB");
const form = document.getElementById("form");
const search = document.getElementById("search");

const movie = new Movie();
const ui = new UI();

movie
  .getMovies("trending")
  .then((data) => {
    ui.showDailyTrendingMovies(data, dailyTrendingMoviesSection);
  })
  .catch((err) => alert("error!"));

movie
  .getMovies("best2021")
  .then((data) => {
    ui.showBest2021Movies(data, best2021MoviesSection);
  })
  .catch((err) => alert("error!"));

movie
  .getMovies("topRated")
  .then((data) => {
    data.splice(10);
    ui.showTopRatedMovies(data, topRatedMoviesSection);
  })
  .catch((err) => alert("error!"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    movie
      .getMovies("search", searchTerm)
      .then((data) => {
        main.innerHTML = "";
        const searchResult = ui.showMovies(data, searchTerm);
        main.appendChild(searchResult);
      })
      .catch((err) => alert("error!"));

    search.value = "";
  } else {
    window.location.reload();
  }
});
