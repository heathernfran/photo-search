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

interface ClearPhotos {
  type: "CLEAR_PHOTOS";
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
  | ClearPhotos
  | IncrementPageNumber
  | UpdateSearchTerm
  | UpdateTotalPages;
