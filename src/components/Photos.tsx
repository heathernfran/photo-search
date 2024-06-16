import { useState } from "react";
import type { Dispatch } from "react";
import { getSearchResults } from "../lib/api";
import type { PhotoSearchAction, PhotoSearchState } from "../lib/definitions";
import { buildImageUrl } from "../lib/utilities";

export default function Photos({
  dispatch,
  state,
}: {
  dispatch: Dispatch<PhotoSearchAction>;
  state: PhotoSearchState;
}) {
  const { pageNumber, photos, searchTerm, totalPages } = state;
  const [error, setError] = useState("");

  async function handleClick() {
    setError("");

    if (!searchTerm.length) {
      setError("Please enter a search term");
      return;
    }

    dispatch({ type: "INCREMENT_PAGE_NUMBER" });

    try {
      const results = await getSearchResults(searchTerm, pageNumber);
      dispatch({ type: "ADD_PHOTOS", photos: results.photo });
    } catch (err) {
      setError(String(err));
    }
  }

  if (photos.length <= 0) {
    return <div>No photos to show</div>;
  }

  return (
    <div>
      {photos.map((photo, index) => (
        <div key={`${photo.id}_${index}`}>
          <img src={buildImageUrl(photo, "t")} alt={photo.title} />
        </div>
      ))}
      <button disabled={pageNumber >= totalPages} onClick={handleClick}>
        Load more
      </button>
      {error && <div>Error in photos: {error}</div>}
    </div>
  );
}
