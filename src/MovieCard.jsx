import "./MovieCard.css";

function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.poster} alt={props.title} className="movie-poster" />

      <div className="movie-info">
        <h3>{props.title}</h3>
        <p>{props.year} • {props.genre}</p>
        <p>⭐ {props.rating}</p>
        <p>{props.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
