class Movie {
  constructor() {
    this.client_key = "275d762c21f3a57f54f0001eefef97ab";
    this.api_url = "https://api.themoviedb.org/3";
    this.img_path = "https://image.tmdb.org/t/p/w1280";
  }

  async getMovies(condition, search = "") {
    let requestUrl = this.api_url;

    if (condition === "trending") {
      requestUrl += `/trending/movie/day?api_key=${this.client_key}&page=1`;
    } else if (condition === "best2021") {
      requestUrl += `/discover/movie?primary_release_year=2021&sort_by=vote_average.desc&api_key=${this.client_key}&page=1`;
    } else if (condition === "topRated") {
      requestUrl += `/movie/top_rated?api_key=${this.client_key}&page=1`;
    } else {
      requestUrl += `/search/movie?api_key=${this.client_key}&query=${search}`;
    }

    try {
      const response = await fetch(requestUrl);
      const data = await response.json();
      return data.results;
      // return data;
    } catch (error) {
      console.log(error);
    }
  }
}

// const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=275d762c21f3a57f54f0001eefef97ab&page=1";

// daily trending
// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>&page=1

// best movies in 2021
// https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&sort_by=vote_average.desc&api_key=<<>>&page=1

// top rated on TMDB
// https://api.themoviedb.org/3/movie/top_rated?api_key=275d762c21f3a57f54f0001eefef97ab&page=1
