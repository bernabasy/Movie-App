import getSeries from './baseUrl.js';

const movieContainer = document.getElementById('home');

const displayMovies = async () => {
  const moviesList = await getSeries();

  moviesList.forEach(async (movieObj) => {
    const card = document.createElement('div');

    card.classList.add('movie-card');

    card.innerHTML = ` 

          <div class="image-container"> 

            <img src="${movieObj.image.medium}" alt="movie image"> 

          </div> 

          <div class="name-like-container"> 

            <p class="title">${movieObj.name}</p> 

            <div class="likes-container"> 

              <i class="fa-sharp fa-solid fa-heart"></i> 

              <span></span> Likes 

            </div> 

          </div> 

          <div class="comment-btn-container"> 

            <button class="comment-btn">Comments</button> 

          </div> 

        `;

    movieContainer.appendChild(card);
  });
};

export default displayMovies;