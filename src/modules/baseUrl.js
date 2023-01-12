const getSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const series = await response.json();
  const data = series.splice(0, 8);
  return data;
};

export default getSeries;