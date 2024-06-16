import { createContext, ReactNode, useReducer } from "react";
import { photoSearchInitialState, photoSearchReducer } from "../lib/reducers";

export const PhotosContext = createContext({});

export default function PhotosProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    photoSearchReducer,
    photoSearchInitialState
  );

  return (
    <PhotosContext.Provider value={{ state, dispatch }}>
      {children}
    </PhotosContext.Provider>
  );
}
