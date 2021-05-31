import React, { useReducer } from "react";

import Context from "./context";

import { reducer, INITIAL_STATE } from "./reducer";

export default function CountContext({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
