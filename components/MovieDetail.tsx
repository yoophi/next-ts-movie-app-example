import React from "react";

export function MovieDetail({id, movie}: { id: string | string[], movie: any }) {
    const { title, large_cover_image, description_full } = movie;
    return <>
        <h3>#{id}</h3>
        <h1>{ title }</h1>
        <img src={large_cover_image} width='640' />
        <div>
            {description_full }
        </div>
    </>
        ;
}