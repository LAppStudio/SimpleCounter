import React, { useCallback, useEffect, useRef, useState } from "react";

import { Animated } from "react-native";

const { View, Value, timing, parallel } = Animated;

export default function Modal({ visible = false, children }) {
  const [show, setShow] = useState(visible);
  const translateY = useRef(new Value(1000)).current;
  const opacity = useRef(new Value(1000)).current;
  const timingRef = useRef(null);

  const animate = (values = {}) =>
    parallel([
      timing(opacity, {
        toValue: values.opacity,
        useNativeDriver: true,
        duration: 150,
      }),
      timing(translateY, {
        toValue: values.translateY,
        useNativeDriver: true,
        duration: 250,
      }),
    ]).start();

  const handleAnimate = useCallback(() => {
    animate(
      visible ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 1000 }
    );
  }, [visible]);

  useEffect(() => {5
    handleAnimate();
    timingRef.current = setTimeout(() => setShow(visible));
    return () => clearTimeout(timingRef.current);
  }, [visible]);

  return show ? (
    <View
      style={[
        {
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          flexDirection: 'column',
          justifyContent: 'flex-end',
          bottom: 0,
        },
        { opacity },
      ]}
    >
      <View style={[{ transform: [{ translateY }] }]}>{children}</View>
    </View>
  ) : null;
}
