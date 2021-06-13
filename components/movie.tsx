import React from "react";

export const Movie = ({movie}) => {
    return (
        <div style={{border: '1px solid black', padding: '1em'}}>
            <h1>{movie.title}</h1>
            <div>
                <img src={movie.medium_cover_image} width="400"  />
            </div>
            <div>{ movie.summary }</div>
            <pre>{JSON.stringify(movie, null, 2)}</pre>
        </div>
    );
};