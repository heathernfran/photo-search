import { Dispatch } from "react";

export type Photo = {
  id: string;
  secret: string;
  server: string;
  title: string;
};

export type PhotoSearchState = {
  searchTerm: string;
  pageNumber: number;
  photos: Photo[];
  totalPages: number;
};

interface AddPhotos {
  type: "ADD_PHOTOS";
  photos: Photo[];
}

interface ResetSearch {
  type: "RESET_SEARCH";
  photos: Photo[];
}

interface IncrementPageNumber {
  type: "INCREMENT_PAGE_NUMBER";
}

interface UpdateSearchTerm {
  type: "UPDATE_SEARCH_TERM";
  searchTerm: string;
}

interface UpdateTotalPages {
  type: "UPDATE_TOTAL_PAGES";
  totalPages: number;
}

export type PhotoSearchAction =
  | AddPhotos
  | ResetSearch
  | IncrementPageNumber
  | UpdateSearchTerm
  | UpdateTotalPages;

export type PhotosContextType = {
  state: PhotoSearchState;
  dispatch: Dispatch<PhotoSearchAction>;
};
