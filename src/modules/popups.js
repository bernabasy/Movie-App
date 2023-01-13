import displayMovies from './homepage.js';
import pullComments from './pullcomments.js';
import { fetchSeries } from './baseUrl.js';
import AddComment from './addComment.js';
import commentsCounter from './displayComents.js';

const showPopups = async () => {
  await displayMovies();
  const moviesList = await fetchSeries();
  const popUp = document.querySelector('#pop');
  const btns = document.querySelectorAll('.comment-btn-container');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      document.querySelector('section').style.display = 'none';
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
      popupTitle.innerHTML = moviesList[i].name;

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
      popupSummary.innerHTML = `summary ${moviesList[i].summary}`;

      popupInfo.appendChild(popupSummary);

      const commentCounterPlace = document.createElement('p');
      commentCounterPlace.classList.add('commentCounterPlaceHolder');
      popupInfo.appendChild(commentCounterPlace);

      const popupMoreInfo = document.createElement('div');
      popupMoreInfo.classList.add('popup-moreInfo');
      popupInfo.appendChild(popupMoreInfo);

      const displayComments = document.createElement('div');
      displayComments.classList.add('display-comments');
      popupInfo.appendChild(displayComments);

      const titleCommentsWrap = document.createElement('div');
      titleCommentsWrap.classList.add('title-comments-wrap');
      displayComments.appendChild(titleCommentsWrap);

      const commentbtn = document.createElement('div');
      commentbtn.classList.add('commentbtn-class');
      titleCommentsWrap.appendChild(commentbtn);

      const titleComments = document.createElement('h3');
      titleComments.classList.add('title-comments');
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
      form.setAttribute('height', '20');
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
      textarea.setAttribute('placeholder', 'Add comment');
      textarea.setAttribute('aria-label', 'message');
      // textarea.rows = '1';
      textarea.setAttribute('required', 'required');
      form.appendChild(textarea);

      const commentBtn = document.createElement('button');
      commentBtn.classList.add('comment-btn');
      commentBtn.setAttribute('type', 'submit');
      commentBtn.innerText = 'Comment';
      form.appendChild(commentBtn);

      const showComments = async () => {
        const allComments = await pullComments(i);
        allComments.forEach((comment) => {
            if (comment.username != '[object Object]' && comment.comment != '[object Object]') {  // eslint-disable-line
            const commentD = document.querySelector('.title-comments');
            const div = document.createElement('div');
            div.classList.add('display');
            div.innerHTML = `<div><p>${comment.creation_date}</p><p>${comment.username} : </p><p>${comment.comment}</p></div>`;
            commentD.appendChild(div);
          }
        });
        const counts = document.querySelectorAll('.display');
        commentsCounter(counts);
      };
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.querySelector('.form-input').value;
        const comment = document.querySelector('.form-textarea').value;
        await AddComment(i, username, comment);
        document.querySelector('.title-comments').innerHTML = '';
        await showComments();
        form.reset();
      });
      showComments();
    });
  });
};

export default showPopups;
