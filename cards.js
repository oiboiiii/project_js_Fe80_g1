"use strict";

(async function () {
  const response = await fetch("./info.json");
  const movies = await response.json();
  globalFunction(movies);
})();

function globalFunction(movies) {
  // переменные
  const movieCardsWrapper = document.querySelector(".movie-cards__wrapper");
  const modalWrap = document.querySelector(".modal-wrap");
  const movieArray = movies.movies;

  // рендер карточек с фильмами
  function getMovies() {
    createCard(movieArray);
  }

  // функция для рендера карточки фильма
  function createCard(array) {
    array.forEach((element) => {
      const { id, title, year, genre, rating, img } = element;
      const strArr = genre.split(",");
      const index = strArr[0];
      const lowGenre = index.toLowerCase();
      const cardMovie = `  <div class="movie-card" id="${id}">
    <div class="movie-card__poster">
        <img class="poster__img" alt="${title}" src="${img}">
        <div class="poster__img-hover"></div>
        <div class="poster__rating">${rating}</div>
    </div>
    <p class="movie-card__info">${year}, ${lowGenre}</p>
</div>`;
      movieCardsWrapper.insertAdjacentHTML("beforeend", cardMovie);
    });
  }

  // модальное окно
  function createModalWindow(info) {
    const { title, img, year, country, genre, director, actors, plot } = info;
    const modal = `
  <div class="modal">
  <div class="modal__container">
      <div class="modal__header">
          <h3 class="header__title">${title}</h3>
      </div>
      <div class="modal__main">
          <img class="main__img" src="${img}" alt="${title}">
          <div class="main__info">
              <p class="info__title info-padding">О фильме</p>
              <p class="info__year info-padding">Год производства: ${year}</p>
              <p class="info__country info-padding">Страна: ${country}</p>
              <p class="info__genre info-padding">Жанр: ${genre}</p>
              <p class="info__director info-padding">Режиссер: ${director}</p>
              <p class="info__actors info-padding">Актеры: ${actors}</p>
              <p class="info__plot info-padding">${plot}</p>
          </div>
      </div>
      <div class="modal__close">&times;</div>
  </div>
</div>`;
    modalWrap.insertAdjacentHTML("beforeend", modal);
  }

  // функция для поиска id карточки и рендера модального окна
  function findCardId(evt) {
    const target = evt.target.closest(".poster__img-hover");
    if (!target) return;

    const card = target.closest(".movie-card");
    const cardId = card.getAttribute("id");

    const film = movieArray.filter((el) => el.id == cardId);

    createModalWindow(film[0]);

    const modalBtnClose = document.querySelector(".modal__close");
    modalBtnClose.addEventListener("click", modalClose);
  }

  // закрытие модального окна
  function modalClose() {
    modalWrap.innerHTML = "";
  }

  // вызов функций
  getMovies();
  movieCardsWrapper.addEventListener("click", findCardId);
}
