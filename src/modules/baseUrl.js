const fetchSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const series = await response.json();
  const selectedSeries = series.splice(0, 8);
  return selectedSeries;
};

const fetchLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/abcBernabasTobuya/likes');
  const series = await response.json();
  return series;
};

export { fetchSeries, fetchLikes };