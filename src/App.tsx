import MovieCard from  "./MovieCard";


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <MovieCard
        title="Interstellar"
        year="2014"
        genre="Sci-Fi"
        rating="8.6"
        poster="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        overview="A team of explorers travel through a wormhole in space."
      />
    </div>
  );
}

export default App;
