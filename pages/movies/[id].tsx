import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { MovieDetail } from "../../components/MovieDetail";

export default function MovieDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieDetail, setMovieDetail] = useState<any>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const loadMovieDetail = async () => {
      setIsLoading(true);
      try {
        const {
          data: {
            data: { movie: movieData },
          },
        } = await axios.get(
          `https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`
        );
        setIsLoading(false);
        setMovieDetail(movieData);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };

    loadMovieDetail();
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
      <MovieDetail id={id} movie={movieDetail} />
    </>
  );
}
