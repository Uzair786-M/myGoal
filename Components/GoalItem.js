import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ deleteGoal, Id, listItem }) => {
  return (
    <TouchableOpacity onLongPress={() => deleteGoal(Id)}>
      <Text style={styles.list}>{listItem}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "cyan",
    marginTop: 10,
    padding: 10,
  },
});

export default GoalItem;
