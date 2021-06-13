import React from "react";
import Link from "next/link";

export const Movie = ({ movie }) => {
  return (
    <div style={{ border: "1px solid black", padding: "1em" }}>
      <h3>#{movie.id}</h3>
      <h1>
        <Link href={`/movies/${movie.id}`}>
          <a href={`/movies/${movie.id}`}>{movie.title}</a>
        </Link>
      </h1>
      <div>
        <img src={movie.medium_cover_image} width="400" />
      </div>
      <div>{movie.summary}</div>
    </div>
  );
};
