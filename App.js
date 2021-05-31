import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";

import { CounterScreen } from "./src/screens";

import { CountContext } from "./src/context";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <CountContext>
        <CounterScreen />
      </CountContext>
    </Fragment>
  );
}
