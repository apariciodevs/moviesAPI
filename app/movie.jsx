import Link from "next/link";
import Image from "next/image";

const Movie = ({ title, id, poster_path, release_date }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1 className="mb-4 text-sm text-gray-500 tracking-wide">{title}</h1>
      <Link href={`/${id}`}>
      <Image
      src={imagePath + poster_path} 
      alt={title}
      width={300}
      height={300} 
      className="rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-300 w-[600px] sm:w-[300px]" 
      />
      </Link>
    </div>
  );
};

export default Movie;
