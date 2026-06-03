import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("loading:", loading);
  console.log("movies:", movies);


  async function runSearch(input) {
    setQuery(input);
    setLoading(true);

    const url = `https://www.omdbapi.com/?apikey=1fca216&s=${encodeURIComponent(input)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data.Search) {
        setMovies([]);
        setLoading(false);
        return;
      }

      setMovies(data.Search.slice(0, 6));
      setLoading(false);
    } catch (err) {
      console.error(err);
      setMovies([]);
      setLoading(false);
    }
  }

  function sortMovies(field) {
    const sorted = [...movies];

    if (field === "Title") {
      sorted.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (field === "Year") {
      sorted.sort((a, b) => Number(a.Year) - Number(b.Year));
    } else if (field === "Type") {
      sorted.sort((a, b) => a.Type.localeCompare(b.Type));
    }

    setMovies(sorted);
  }

  return (
    <SearchContext.Provider
      value={{ query, movies, loading, runSearch, sortMovies }}
    >
      {children}
    </SearchContext.Provider>
  );
}