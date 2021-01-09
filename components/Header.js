import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TODO-IST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: "#1C6E8C",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "#FFF",
  },
});

export default Header;
