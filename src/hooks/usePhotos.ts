import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import { PhotosContextType } from "../lib/definitions";

export default function usePhotos() {
  return useContext(PhotosContext) as PhotosContextType;
}
