import type {
  Photo,
  PhotoSearchAction,
  PhotoSearchState,
} from "../lib/definitions";

export const photoSearchInitialState: PhotoSearchState = {
  pageNumber: 1,
  photos: [],
  searchTerm: "",
  totalPages: 0,
};

export default function photoSearchReducer(
  state: PhotoSearchState,
  action: PhotoSearchAction
): PhotoSearchState {
  switch (action.type) {
    case "ADD_PHOTOS": {
      const nextPhotos = [...state.photos, ...action.photos];
      return {
        ...state,
        photos: nextPhotos,
      };
    }
    case "INCREMENT_PAGE_NUMBER": {
      const nextPageNumber = state.pageNumber + 1;
      return {
        ...state,
        pageNumber: nextPageNumber,
      };
    }
    case "RESET_SEARCH": {
      const nextPageNumber = 1;
      const nextPhotos: Photo[] = [];
      return {
        ...state,
        pageNumber: nextPageNumber,
        photos: nextPhotos,
      };
    }
    case "UPDATE_SEARCH_TERM": {
      const nextSearchTerm = action.searchTerm;
      return {
        ...state,
        searchTerm: nextSearchTerm,
      };
    }
    case "UPDATE_TOTAL_PAGES": {
      const nextTotalPages = action.totalPages;
      return {
        ...state,
        totalPages: nextTotalPages,
      };
    }
    default: {
      throw Error(`Unknown action: ${action}`);
    }
  }
}
