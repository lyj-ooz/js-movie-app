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
        console.log(data);
        main.innerHTML = "";
        ui.showMovies(data, searchTerm);
      })
      .catch((err) => alert("error!"));
    search.value = "";
  } else {
    window.location.reload();
  }
});

// console.log(trendingMovies);

// const API_URL =
//   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=275d762c21f3a57f54f0001eefef97ab&page=1";

// const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API =
//   "https://api.themoviedb.org/3/search/movie?api_key=275d762c21f3a57f54f0001eefef97ab&query=";

// const form = document.getElementById("form");
// const search = document.getElementById("search");
// const main = document.getElementById("main");

// //get initial movies
// getMovies(API_URL);

// async function getMovies(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data.results);
//   showMovies(data.results);
// }

// function showMovies(movies) {
//   main.innerHTML = "";
//   movies.forEach((movie) => {
//     const { title, poster_path, vote_average, overview } = movie;
//     const movieImgUrl =
//       poster_path === null
//         ? "https://images.unsplash.com/photo-1601027847350-0285867c31f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
//         : IMG_PATH + poster_path;
//     const movieEl = document.createElement("div");
//     movieEl.classList.add("movie");

//     movieEl.innerHTML = `
//         <img src="${movieImgUrl}" alt="${title}" />
//         <div class="movie-info">
//           <h3>${title}</h3>
//           <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//         </div>
//         <div class="overview">
//           <h3>Overview</h3>
//           ${overview === "" ? "No Overview" : overview}
//         </div>
//     `;
//     console.log(movieEl);
//     main.appendChild(movieEl);
//   });
// }

// function getClassByRate(vote) {
//   if (vote >= 8) {
//     return "green";
//   } else if (vote >= 5) {
//     return "orange";
//   } else {
//     return "red";
//   }
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchTerm = search.value;

//   if (searchTerm && searchTerm !== "") {
//     getMovies(SEARCH_API + searchTerm);
//     search.value = "";
//   } else {
//     window.location.reload();
//   }
// });
