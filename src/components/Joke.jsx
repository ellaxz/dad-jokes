export default function Joke({
  id,
  text,
  favorite,
  onFavorite,
  onDelete,
  likes,
  onLike,
  onDislike,
}) {
  const handleLike = () => {
    onLike(id);
  };

  const handleDislike = () => {
    onDislike(id);
  };

  const handleFavorite = () => {
    onFavorite(id);
  };

  return (
    <div>
      <p>{text}</p>
      <p>likes: {likes}</p>
      <p>Favorite:{favorite ? "yes" : "no"}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
      <button onClick={() => onDelete(id)}>delete</button>
      <button onClick={handleFavorite}>Favorite</button>
    </div>
  );
}
