import React from "react";

import { FlatList, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const OPTIONS = [{ theme: "light" }, { theme: "dark" }];

const ItemSeparatorComponent = () => <View style={styles.divider} />;

export default function Options({ value = 'light', onSelect = () => null }) {
  const renderItem = ({ item: { theme } }) => {
    const onPress = () => onSelect(theme);
    return (
      <TouchableOpacity {...{ onPress }} style={styles.item}>
        <Text style={styles.itemLabel}>{theme}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={OPTIONS}
      {...{ renderItem, ItemSeparatorComponent }}
      style={styles.container}
      key={({theme}) => theme}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
  },
  item: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
  },
  itemLabel: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  divider: {
    height: 10,
    width: "100%",
  },
});
