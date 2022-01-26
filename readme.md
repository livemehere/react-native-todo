# React Native로 Todo 앱 만들기 with Expo

### App.js

```js
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
```

### todo.js

```js
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

## 앱 화면 캡처

```
![IMG_8145](https://user-images.githubusercontent.com/61547778/151235570-ed2a625a-e25d-455a-b55c-fc7fd349448c.PNG )
![IMG_8141](https://user-images.githubusercontent.com/61547778/151235586-39a259aa-06d3-46f1-880d-7a397c2448f6.PNG )
![IMG_8144](https://user-images.githubusercontent.com/61547778/151235590-3f2d5583-f8c5-4c3d-b4d3-345957158048.PNG )
![IMG_8143](https://user-images.githubusercontent.com/61547778/151235594-262fe381-8a09-41ee-bb7a-f3f87a209a1f.PNG )
![IMG_8142](https://user-images.githubusercontent.com/61547778/151235598-a8641cfb-f079-4ef0-ae62-33ebba50dafb.PNG )


