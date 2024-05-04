"use strict";

// переменные
const movieCardsWrapper = document.querySelector(".movie-cards__wrapper");
let movieArray = [];

// рендер карточек с фильмами
async function getMovies() {
  try {
    const response = await fetch("./info.json");
    const movies = await response.json();
    console.log(movies);
    movieArray = movies;
    console.log(movieArray);
    createCard(movieArray);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

// функция для рендера карточки фильма
function createCard(array) {
  array.forEach((element) => {
    const { id, title, year, genre, rating, img } = element;
    const cardMovie = `  <div class="movie-card" id="${id}">
    <div class="movie-card__poster">
        <img class="poster__img" alt="${title}" src="${img}">
        <div class="poster__rating">${rating}</div>
    </div>
    <p class="movie-card__info">${year}, ${genre}</p>
</div>`;
    movieCardsWrapper.insertAdjacentHTML("beforeend", cardMovie);
  });
}

getMovies();
