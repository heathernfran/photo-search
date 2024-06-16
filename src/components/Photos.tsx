import { useState } from "react";
import { Link } from "react-router-dom";
import usePhotos from "../hooks/usePhotos";
import { getSearchResults } from "../lib/api";
import { buildImageUrl } from "../lib/utilities";

export default function Photos() {
  const { state, dispatch } = usePhotos();
  const { pageNumber, photos, searchTerm, totalPages } = state;
  const [error, setError] = useState("");

  async function handleClick() {
    setError("");

    if (!searchTerm.length) {
      setError("Please enter a search term");
      return;
    }

    try {
      dispatch({ type: "INCREMENT_PAGE_NUMBER" });
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
        <Link
          key={`${photo.id}_${index}`}
          to={`photos/${photo.id}`}
          state={{ photo }}
        >
          <img
            src={buildImageUrl(photo, "t")}
            alt={photo.title}
            className="thumbnail"
          />
        </Link>
      ))}
      <div>
        <button disabled={pageNumber >= totalPages} onClick={handleClick}>
          Load more
        </button>
        {error && <div>Error in photos: {error}</div>}
      </div>
    </div>
  );
}
