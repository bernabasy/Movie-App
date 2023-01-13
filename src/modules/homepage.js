import { fetchSeries, fetchLikes, postLike } from './baseUrl.js';
import displayMovieCounter from './homepageCounter.js';

const movieContainer = document.getElementById('home');

const likedID = async (liked, likedId) => {
  for (let i = 0; i < liked.length; i += 1) {
    if (likedId.toString() === liked[i].item_id) {
      return liked[i].likes;
    }
  }
  return 0;
};

const displayMovies = async () => {
  const moviesList = await fetchSeries();
  const moviesLikes = await fetchLikes();

  moviesList.forEach(async (movieObj) => {
    const card = document.createElement('div');
    const displayLikes = await likedID(moviesLikes, movieObj.id);

    card.classList.add('movie-card');

    card.innerHTML = ` 
          <div class="image-container"> 
            <img src="${movieObj.image.medium}" alt="movie image"> 
          </div> 
          <div class="name-like-container"> 
            <p class="title">${movieObj.name}</p> 
            <div class="likes-container"> 
              <i id="${movieObj.id}"class="fa-sharp fa-solid fa-heart"></i> 
              <span>${displayLikes.toString()} Likes</span>
            </div> 
          </div> 
          <div class="comment-btn-container"> 
            <button class="comment-btn">Comments</button> 
          </div> 
        `;
    movieContainer.appendChild(card);
    displayMovieCounter();
  });
};

movieContainer.addEventListener('click', async (e) => {
  if (e.target.matches('.fa-heart')) {
    await postLike(e.target.id);
    const getUpdatedLikes = await fetchLikes();
    const updateLikesValue = await likedID(getUpdatedLikes, e.target.id);
    e.target.nextElementSibling.innerHTML = `${updateLikesValue} Likes`;
  }
});

export default displayMovies;