
/* eslint-disable object-curly-newline */
const baseUrl = 'https://api.tvmaze.com/search/shows?q=';
 const pullMovies = [
  'Episodes',
  'Phantasy Star Online 2',
  'Game of Thrones',
  'Reacher',
  'Gangland',
  'Titans',
];
const displayMovies = [];

export const getMovies = () => {
  pullMovies.forEach(async (episode, index) => {
    const itemId = 'item'.concat(index);
    const fetchUrl = baseUrl.concat(episode);
    const response = await fetch(fetchUrl);
    const data = await response.json();
    const arr = data[0];
    const { show } = arr;
    const { id, name, language, image, summary, premiered } = show;
      if (image != null) {
          const { medium } = image;
          const trimmedSummary = summary.substring(0, 200);
          const movie = {
              movieId: id,
              itemId,
              movieImg: medium,
              movieTitle: name,
              movieStatus: language,
              moviePremier: premiered,
              movieInfo: trimmedSummary,
          };
          displayMovies.push(movie);
      }
  });
  return displayMovies;
};
getMovies();
