import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import usePhotos from "../hooks/usePhotos";
import { getSearchResults } from "../lib/api";

export default function Search() {
  const { state, dispatch } = usePhotos();
  const { pageNumber, searchTerm } = state;
  const [error, setError] = useState("");
  let timeoutId: ReturnType<typeof setTimeout>;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      const nextSearchTerm = event.target.value;
      dispatch({ type: "UPDATE_SEARCH_TERM", searchTerm: nextSearchTerm });
    }, 100);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!searchTerm.length) {
      setError("Please enter a search term");
      return;
    }

    try {
      const results = await getSearchResults(searchTerm, pageNumber);
      dispatch({ type: "CLEAR_PHOTOS" });
      dispatch({ type: "ADD_PHOTOS", photos: results.photo });
      dispatch({ type: "UPDATE_TOTAL_PAGES", totalPages: results.pages });
    } catch (err) {
      setError(String(err));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for photos
        <input onChange={handleChange} type="text" />
      </label>
      <button type="submit">Search</button>
      {error && <div>Error in search: {error}</div>}
    </form>
  );
}
