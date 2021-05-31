import React from "react";

import { View, Text } from "react-native";

import styles from "./styles";

function CountView({ value = 0 }) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{value}</Text>
    </View>
  );
}

export default CountView;
