/** * @jest-environment jsdom */
import commentsCounter from './displayComents.js';

document.body.innerHTML = `
  <div class="commentCounterPlaceHolder">
  </div>
`;

const Data = [1, 2, 3, 4, 5];

describe('Test comments counter', () => {
  it('comments counter to be defined', () => {
    expect(commentsCounter(Data)).toBeDefined();
  });
    
  it('Element not to be empty', () => {
    const item = document.querySelector('.commentCounterPlaceHolder');
    expect(item.innerHTML).not.toBe('');
  });

});
