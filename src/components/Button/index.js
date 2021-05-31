import React from "react";

import { TouchableOpacity, View } from "react-native";

import styles from "./styles";

export default function Button({ onPress, onLongPress, children }) {
  return (
    <TouchableOpacity {...{ onPress, onLongPress }} style={styles.container}>
      <View style={styles.content}>{children}</View>
    </TouchableOpacity>
  );
}
