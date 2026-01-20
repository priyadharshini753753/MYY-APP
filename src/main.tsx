import MovieCard from "./MovieCard";
import "./MovieCard.css";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <MovieCard
        title="Interstellar"
        year="2014"
        rating="8.6"
        poster="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
      />
    </div>
  );
}

export default App;
