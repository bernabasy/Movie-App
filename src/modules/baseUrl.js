const fetchSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const series = await response.json();
  const selectedSeries = series.splice(0, 8);
  return selectedSeries;
};

const fetchLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oXQ9fIHMu4Af22UBscBn/likes');
  const series = await response.json();
  return series;
};

const postLike = async (id) => {
  const resource = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oXQ9fIHMu4Af22UBscBn/likes', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  });
  return resource;
};

export { fetchSeries, fetchLikes, postLike };