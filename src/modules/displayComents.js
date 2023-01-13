const commentsCounter = () => {
  const counts = document.querySelectorAll('.display');
  const counterCommentsWrap = document.querySelector('.popup-summary');
  const displaycom = document.createElement('p');
  displaycom.innerHTML = `<div id "counterslenghtDis"><h2 >COMMENTS(${counts.length})</h2></div>`;
  counterCommentsWrap.appendChild(displaycom);
  return commentsCounter;
};

export default commentsCounter;
