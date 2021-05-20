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
