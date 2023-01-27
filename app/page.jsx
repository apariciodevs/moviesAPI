import Movie from "./movie";

export default async function Home(movie) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}` 
  );
  const res = await data.json();
  console.log(res)

  return (
    <main>
      <div className="grid gap-8 grid-cols-fluid ">
        {res.results.map((movie) => (
           <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}
