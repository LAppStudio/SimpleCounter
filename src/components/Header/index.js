import React from "react";

import { View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}></TouchableOpacity>
    </View>
  );
}
