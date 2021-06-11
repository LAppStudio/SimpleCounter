import React, { useReducer } from "react";
import { ThemeModal } from "../../components";

import Context from "./context";

import { reducer, INITIAL_STATE } from "./reducer";

export default function ThemeContext({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
      <ThemeModal visible={true} />
    </Context.Provider>
  );
}
