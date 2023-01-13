const pullComments = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oXQ9fIHMu4Af22UBscBn/comments?item_id=${id}`);
  const comments = await response.json();
  return comments;
};

export default pullComments;
