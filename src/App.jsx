import { useState } from "react";
import { Input } from "./pages/Input.jsx";

const STATES = {
  INPUT: "INPUT",
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

export function App() {
  const [state, setState] = useState(STATES.INPUT);

  return (
    <div>
      {state === STATES.INPUT && <Input setState={setState} />}
      {state === STATES.LOADING && <div>Loading</div>}
      {state === STATES.ERROR && <div>Error</div>}
      {state === STATES.SUCCESS && <div>Success</div>}
    </div>
  );
}