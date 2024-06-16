import { useLocation, useNavigate } from "react-router-dom";
import { buildImageUrl } from "../lib/utilities";

export default function PhotoDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { photo } = location.state;

  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div>
        <h1>{photo.title}</h1>
        <img src={buildImageUrl(photo, "b")} alt={photo.title} />
      </div>
    </div>
  );
}
