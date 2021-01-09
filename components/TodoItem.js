import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, onHandlePress }) => {
  return (
    <TouchableOpacity onPress={() => onHandlePress(item.key)}>
      <View style={styles.itemContent}>
        <Text style={styles.item}>{item.text}</Text>
        <MaterialIcons name="delete" size={24} color="red" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginTop: 16,
    borderColor: "#BBB",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  item: {
    fontSize: 24,
  },
});

export default TodoItem;
