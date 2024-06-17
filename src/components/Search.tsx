import { useState } from "react";
import type { FormEvent } from "react";
import usePhotos from "../hooks/usePhotos";
import { getSearchResults } from "../lib/api";

export default function Search() {
  const { state, dispatch } = usePhotos();
  const { pageNumber } = state;
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.target as HTMLFormElement);
    const nextSearchTerm = formData.get("search")?.toString();
    if (!nextSearchTerm) {
      setError("Please enter a search term");
      return;
    }

    try {
      const results = await getSearchResults(nextSearchTerm, pageNumber);
      dispatch({ type: "UPDATE_SEARCH_TERM", searchTerm: nextSearchTerm });
      dispatch({ type: "RESET_SEARCH" });
      dispatch({ type: "ADD_PHOTOS", photos: results.photo });
      dispatch({ type: "UPDATE_TOTAL_PAGES", totalPages: results.pages });
    } catch (err) {
      setError(String(err));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search for photos</label>
      <input name="search" type="text" />
      <button type="submit">Search</button>
      {error && <div>Error in search: {error}</div>}
    </form>
  );
}
