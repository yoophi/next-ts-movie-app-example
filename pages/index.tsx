import axios from "axios";
import React, { useEffect, useState } from "react";
import { Movie } from "../components/movie";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<any>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      try {
        const {
          data: {
            data: { movies },
          },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        setIsLoading(false);
        setMovies(movies);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };

    loadMovies();
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return (
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  );
}
