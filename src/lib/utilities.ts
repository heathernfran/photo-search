import type { Photo } from "./definitions";

export function buildImageUrl(photo: Photo, size: string) {
  const { id, secret, server } = photo;
  return `https://live.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
}
