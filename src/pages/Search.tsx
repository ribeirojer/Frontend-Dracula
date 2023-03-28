import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {};

const Search = (props: Props) => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url:string) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `$&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {/*movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)*/}
      </div>
    </div>
  );
};

export default Search;
