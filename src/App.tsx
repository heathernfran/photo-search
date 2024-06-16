import { useReducer } from "react";
import Search from "./components/Search";
import Photos from "./components/Photos";
import { photoSearchInitialState, photoSearchReducer } from "./lib/reducers";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(
    photoSearchReducer,
    photoSearchInitialState
  );

  return (
    <div>
      <Search dispatch={dispatch} state={state} />
      <Photos dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
