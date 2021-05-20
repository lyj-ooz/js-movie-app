class UI {
  constructor() {
    this.img_path = "https://image.tmdb.org/t/p/w1280";
    this.null_img =
      "https://images.unsplash.com/photo-1601027847350-0285867c31f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
  }

  showMovies(data, search) {
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    section.className = "search-results";

    heading.innerText = `Search results for '${search}'`;
    section.appendChild(heading);

    if (data.length === 0) {
      const noResultDiv = document.createElement("div");
      noResultDiv.classList.add("no-result");
      noResultDiv.innerText = `Can't find movies for '${search}'`;
      section.appendChild(noResultDiv);
      return section;
    }

    const moviesDiv = document.createElement("div");
    moviesDiv.classList.add("movies");

    console.log(data.length);

    data.forEach((d) => {
      const movie = document.createElement("div");
      movie.className = "movie";
      movie.innerHTML = `
        <div class="poster">
          <img
            src="${
              d.poster_path === null
                ? this.null_img
                : this.img_path + d.poster_path
            }"
            alt="${d.title} movie poster"
          />
        </div>
        <div class="info">
          <div class="title">
            ${d.title}
          </div>
          <div class="release">
            <span class="date">${d.release_date}</span> released
          </div>
          <span class="rate ${
            d.vote_average >= 7
              ? "green"
              : d.vote_average >= 5
              ? "yellow"
              : "red"
          }">${d.vote_average}</span>
        </div>
      `;
      moviesDiv.appendChild(movie);
    });

    section.appendChild(moviesDiv);
    return section;
  }

  showDailyTrendingMovies(data, section) {
    const moviesDiv = document.createElement("div");
    moviesDiv.classList.add("movies", "blur-end");

    data.forEach((d) => {
      const movie = document.createElement("div");
      movie.className = "movie";
      movie.innerHTML = `
        <div class="poster">
          <img
            src="${
              d.poster_path === null
                ? this.null_img
                : this.img_path + d.poster_path
            }"
            alt="${d.title} movie poster"
          />
        </div>
        <div class="info">
          <div class="title">
            ${d.title}
          </div>
          <div class="release">
            <span class="date">${d.release_date}</span> released
          </div>
          <span class="rate ${
            d.vote_average >= 7
              ? "green"
              : d.vote_average >= 5
              ? "yellow"
              : "red"
          }">${d.vote_average}</span>
        </div>
      `;
      moviesDiv.appendChild(movie);
    });

    section.appendChild(moviesDiv);
  }

  showBest2021Movies(data, section) {
    const moviesDiv = document.createElement("div");
    moviesDiv.classList.add("movies", "blur-end");

    data.forEach((d) => {
      const movie = document.createElement("div");
      movie.className = "movie";
      movie.innerHTML = `
        <div class="poster">
          <img
            src="${
              d.poster_path === null
                ? this.null_img
                : this.img_path + d.poster_path
            }"
            alt="${d.title} movie poster"
          />
        </div>
        <div class="info">
          <div class="title">
            ${d.title}
          </div>
          <div class="release">
            <span class="date">${d.release_date}</span> released
          </div>
          
        </div>
      `;
      moviesDiv.appendChild(movie);
    });

    section.appendChild(moviesDiv);
  }

  showTopRatedMovies(data, section) {
    const moviesDiv = document.createElement("div");
    moviesDiv.classList.add("movies", "blur-end");

    data.forEach((d, i) => {
      const movie = document.createElement("div");
      movie.className = "movie";
      movie.innerHTML = `
        <div class="rank ${i === 0 ? "first" : i >= 9 ? "small" : ""}">${
        i + 1
      }</div>
        <div class="poster">
          <img
            src="${
              d.poster_path === null
                ? this.null_img
                : this.img_path + d.poster_path
            }"
            alt="${d.title} movie poster"
          />
        </div>
        <div class="info">
          <div class="title">
            ${d.title}
          </div>
          <div class="release">
            <span class="date">${d.release_date}</span> released
          </div>
        </div>
      `;

      moviesDiv.appendChild(movie);
    });

    section.appendChild(moviesDiv);
  }
}
