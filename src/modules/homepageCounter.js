const displayMovieCounter = () => {
  const countPlaceholder = document.querySelector('.counter');
  const movieCards = document.querySelectorAll('.movie-card');
  countPlaceholder.innerHTML = `(${movieCards.length})`;
};

const countComments = (curr, updated) => {
  let total = curr;
  const commentsBtn = document.querySelector('.comment-btn');
  commentsBtn.addEventListener('click', () => { total = curr.push(updated); });
  commentsBtn.click();
  return total;
};

const countLikes = (total) => {
  const likeIcon = document.querySelector('.fa-heart');
  likeIcon.addEventListener('click', () => { total += 1; });
  likeIcon.click();
  return total;
};

export default displayMovieCounter;
export { countComments, countLikes };
