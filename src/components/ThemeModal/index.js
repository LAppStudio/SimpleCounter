import React, { useCallback, useContext } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import themeContext from "../../context/theme/context";
import { Creators } from "../../context/theme/reducer";

import Modal from "../Modal";
import Options from "./Options";

import styles from "./styles";

export default function ThemeModal({ onClose }) {
  const {state, dispatch} = useContext(themeContext);
  const { modalOpen: visible = false, theme: value = 'light' } = state;

  const handleSelect = useCallback(
    (theme) => {
      dispatch(Creators.set(theme));
    },
    [dispatch]
  );

  const handleClose = useCallback(() => {
    dispatch(Creators.close());
  }, [dispatch]);

  return (
    <Modal {...{ visible }}>
      <View style={styles.container}>
        <Text style={styles.header}>Themes</Text>
        <Options {...{ value }} onSelect={handleSelect} />
        <View style={styles.bottom}>
          <TouchableOpacity onPress={handleClose} style={styles.bottomButton}>
            <Text style={styles.buttonLabel}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
