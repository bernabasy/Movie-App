const AddComment = async (id, username, comment) => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oXQ9fIHMu4Af22UBscBn/comments', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
  return data;
};
export default AddComment;