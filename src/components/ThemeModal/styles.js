import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 300,
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#fff",
  },
  header: {
    height: 30,
    width: "100%",
    textAlign: "left",
    fontSize: 22,
    fontWeight: "bold",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#000",
    borderRadius: 10,
    height: 45,
  },
  buttonLabel: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: 'bold'
  },
});
