import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import Todo from "./todo";

export default function App() {
  const [selected, setSelected] = useState("work");
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});
  const onChange = (text) => {
    setText(text);
  };
  const onSubmit = () => {
    const newTodos = { ...todos };
    newTodos[Date.now()] = { text: text, tabType: selected, isComplete: false };
    setTodos(newTodos);
    setText("");
  };
  const remove = (id) => {
    const newTodos = { ...todos };
    delete newTodos[id];
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setSelected("work");
          }}
        >
          <Text
            style={{
              ...styles.buttonText,
              color: selected == "work" ? "white" : "gray",
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected("private");
          }}
        >
          <Text
            style={{
              ...styles.buttonText,
              color: selected == "work" ? "gray" : "white",
            }}
          >
            Private
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChange}
        placeholder="What you are going to do?"
        onSubmitEditing={onSubmit}
      />
      <ScrollView>
        {Object.keys(todos).map((todo) => {
          return selected == todos[todo].tabType ? (
            <Todo
              key={todo}
              id={todo}
              text={todos[todo].text}
              remove={remove}
            />
          ) : null;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 80,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 30,
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 30,
  },
});
