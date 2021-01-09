import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTodo = ({ onHandleAdd }) => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Add todo..."
        onChangeText={(text) => setText(text)}
        style={styles.input}
      />
      <Button
        title="Add Todo"
        color="#1C6E8C"
        onPress={() => onHandleAdd(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#AAA",
  },
});

export default AddTodo;
