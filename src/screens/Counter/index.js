import React, { useCallback, useContext } from "react";

import CountContext from "../../context/count/context";
import { Creators } from "../../context/count/reducer";

import { View } from "react-native";

import { Button, CountView } from "../../components";

import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

const Minus = (props) => (
  <Button {...props}>
    <Entypo name="minus" />
  </Button>
);

const Plus = (props) => (
  <Button {...props}>
    <Entypo name="plus" />
  </Button>
);

function CounterScreen() {
  const { state, dispatch } = useContext(CountContext);
  const { value = 0 } = state;

  const handleAdd = useCallback(() => {
    dispatch(Creators.add());
  }, [dispatch]);

  const handleRemove = useCallback(() => {
    dispatch(Creators.remove());
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(Creators.reset());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Minus onPress={handleRemove} onLongPress={handleReset} />
      <CountView {...{ value }} />
      <Plus onPress={handleAdd} />
    </View>
  );
}

export default CounterScreen;
