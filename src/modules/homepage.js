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

// popup

 export const showPopups = async () => {
  await displayMovies();
  const moviesList = await getSeries();
  const popUp = document.querySelector('#pop');
  const btns = document.querySelectorAll('.comment-btn-container');
  // console.log(btns);
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      console.log(btn);
      // document.querySelector('header').style.display = 'none';
      document.querySelector('section').style.display = 'none';
      // document.querySelector('footer').style.display = 'none';
      popUp.style.display = 'block';
      const popupBg = document.createElement('div');
      popupBg.classList.add('popup-bg');
      popUp.appendChild(popupBg);

      const popupContainer = document.createElement('div');
      popupContainer.classList.add('popup-container');
      popupBg.appendChild(popupContainer);

      const popupInfo = document.createElement('div');
      popupInfo.classList.add('popup-info');
      popupContainer.appendChild(popupInfo);

      const popupTitleContainer = document.createElement('div');
      popupTitleContainer.classList.add('popup-title-wrap');
      popupInfo.appendChild(popupTitleContainer);

      const popupTitle = document.createElement('h2');
      popupTitle.classList.add('tittle-popup');
      popupTitle.innerHTML = 'movieTitle';
      //   if (show.name === null) {
      //     popupTitle.innerHTML = 'Lorem ipsum';
      //   }
      popupTitleContainer.appendChild(popupTitle);

      const closeImg = document.createElement('h1');
      closeImg.classList.add('close-popup');
      closeImg.innerHTML = ' x';
      popupTitle.appendChild(closeImg);

      closeImg.addEventListener('click', () => {
        popUp.style.display = 'none';
        document.querySelector('section').style.display = ' grid';
        popUp.innerHTML = '';
      });

      const popupImg = document.createElement('img');
      popupImg.classList.add('popup-img');
      popupImg.setAttribute('src', moviesList[i].image.medium);
      popupImg.setAttribute('alt', 'image movie');
      popupTitleContainer.appendChild(popupImg);

      const genres = document.createElement('p');
      genres.classList.add('genres', 'text-moreinfo');
      genres.innerHTML = `Genres: ${moviesList[i].genres}`;
      popupTitleContainer.appendChild(genres);

      const popupSummary = document.createElement('p');
      popupSummary.classList.add('popup-summary');
      popupSummary.innerHTML = `Premiered: ${moviesList[i].summary}`;
      //   if (/summary === null) {
      //     popupSummary.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
      //   }
      popupInfo.appendChild(popupSummary);

      const popupMoreInfo = document.createElement('div');
      popupMoreInfo.classList.add('popup-moreInfo');
      popupInfo.appendChild(popupMoreInfo);

      const displayComments = document.createElement('div');
      displayComments.classList.add('display-comments');
      popupInfo.appendChild(displayComments);

      const titleCommentsWrap = document.createElement('div');
      titleCommentsWrap.classList.add('title-comments-wrap');
      displayComments.appendChild(titleCommentsWrap);

      const titleComments = document.createElement('h3');
      titleComments.classList.add('title-comments');
      titleComments.innerHTML = 'Comments0';
      titleCommentsWrap.appendChild(titleComments);

      const counterCommentsWrap = document.createElement('div');
      counterCommentsWrap.classList.add('counter-comments-wrap');
      titleCommentsWrap.appendChild(counterCommentsWrap);

      const showCommentsWrap = document.createElement('div');
      showCommentsWrap.classList.add('show-comments-wrap');
      displayComments.appendChild(showCommentsWrap);

      const addCommentWrap = document.createElement('div');
      addCommentWrap.classList.add('Add-comment-wrap');
      popupInfo.appendChild(addCommentWrap);

      const addComment = document.createElement('div');
      addComment.classList.add('Add-comment');
      addCommentWrap.appendChild(addComment);

      const addCommentTitle = document.createElement('h3');
      addCommentTitle.classList.add('add-comment-title');
      addCommentTitle.innerHTML = 'Add a comment';
      addComment.appendChild(addCommentTitle);

      const form = document.createElement('form');
      form.classList.add('form');
      form.setAttribute('action', '#');
      form.setAttribute('method', 'get');
      form.setAttribute('height', '10');
      addComment.appendChild(form);

      const input = document.createElement('input');
      input.classList.add('form-input');
      input.setAttribute('type', 'text');
      input.setAttribute('name', 'user');
      input.setAttribute('placeholder', 'Your name');
      input.setAttribute('aria-label', 'user');
      input.setAttribute('maxlength', '10');
      input.setAttribute('required', 'required');
      form.appendChild(input);

      const textarea = document.createElement('textarea');
      textarea.classList.add('form-textarea');
      textarea.setAttribute('placeholder', 'Your insights');
      textarea.setAttribute('aria-label', 'message');
      textarea.rows = '1';
      textarea.setAttribute('required', 'required');
      form.appendChild(textarea);

      const commentBtn = document.createElement('button');
      commentBtn.classList.add('comment-btn');
      commentBtn.setAttribute('type', 'submit');
      commentBtn.innerText = 'Comment';
      form.appendChild(commentBtn);
    });
  });
};


export default showPopups;
