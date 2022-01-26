import { Fontisto } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useEffect, useState } from "react";

export default function Todo({ id, text, remove }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.todo}>
      <View style={styles.checkBoxAndText}>
        <Checkbox
          style={styles.checkBox}
          value={isChecked}
          onValueChange={setChecked}
          color="#555"
        />
        <Text
          style={{
            ...styles.todoText,
            textDecorationLine: isChecked ? "line-through" : "none",
            color: isChecked ? "#777" : "white",
          }}
        >
          {text}
        </Text>
      </View>
      <Pressable onPress={() => remove(id)}>
        <Fontisto name="trash" size={18} color="gray" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    backgroundColor: "#444",
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    paddingHorizontal: 25,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoText: {
    fontSize: 18,
    fontWeight: "400",
  },
  checkBoxAndText: {
    flexDirection: "row",
  },
  checkBox: {
    marginRight: 15,
  },
});
