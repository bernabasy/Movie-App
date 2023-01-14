/** * @jest-environment jsdom */
import { countComments, countLikes } from './homepageCounter.js';

describe('Count number of shows, comments and likes', () => {
  test('Count the shows and render the number on page', () => {
    document.body.innerHTML = `
    <div class="counter"></div>
    <div class="movie-card"></div>
    <div class="movie-card"></div>
    <div class="movie-card"></div>
    `;
    const countPlaceholder = document.querySelector('.counter');
    const movieCards = document.querySelectorAll('.movie-card');
    const result = `${movieCards.length}`;
    countPlaceholder.innerHTML = `(${result})`;
    expect(result).toBe('3');
  });

  test('comments = [{name: "Nelly", message: "Bad movie"}] expect "1"', () => {
    document.body.innerHTML = `
    <button class="comment-btn">Comments</button>
    `;
    const curr = [{ name: 'Thomas', message: 'Great show' }];
    const updated = { name: 'Angelou', message: 'I enjoyed it' };
    expect(countComments(curr, updated)).toEqual(2);
  });

  test('We have 0 likes now, we expect 1 like when like icon is clicked', () => {
    document.body.innerHTML = `
      <i class="fa-heart"></i>
      <i class="fa-heart"></i>
      `;
    expect(countLikes(0)).toBe(1);
    expect(countLikes(99)).toBe(100);
    expect(countLikes(23)).toBe(24);
  });
});