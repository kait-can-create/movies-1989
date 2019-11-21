import React from 'react';

const MovieInfo = props => {
  const imgSrc = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'

  return (
    <li>

      {props.title},
      {props.release_date},
      {props.vote_average},
      <img src={imgSrc + props.poster_path} />,
      {props.overview}

    </li>
  );
}

export default MovieInfo;
