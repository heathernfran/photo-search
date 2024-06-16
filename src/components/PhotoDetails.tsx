import { useLocation } from "react-router-dom";
import { buildImageUrl } from "../lib/utilities";

export default function PhotoDetails() {
  const location = useLocation();
  const { photo } = location.state;

  return (
    <div>
      <img src={buildImageUrl(photo, "b")} alt={photo.title} />
    </div>
  );
}
