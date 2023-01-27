import Movie from "../movie";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <div>
      <div className="mx-8">
        <div className="mb-4">
          <h2 className="text-xl text-white mb-2  ">{res.title}</h2>
          <h3 className="text-xs text-gray-300 mb-1">{res.release_date}</h3>
          <h2 className="text-xs mb-1 text-gray-300">
            Runtime {res.runtime} minutes
          </h2>
          <h2 className="bg-green-600 text-xs inline-block rounded-lg py-1 px-2">
            {res.status}
          </h2>
        </div>
        <Image
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          priority
          alt="movie poster"
          className=" w-full rounded-xl"
        />
        <p className="text-sm text-gray-300 mt-8">{res.overview}</p>
      </div>
    </div>
  );
}
