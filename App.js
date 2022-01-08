import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [enteredGoals, setEnteredGoals] = useState("");
  const [addCourseGoals, setAddCourseGoals] = useState([]);
  const [showGoalModal, setShowGoalModal] = useState(false);

  const enteredGoalHandler = (enteredText) => {
    setEnteredGoals(enteredText);
  };

  const addCourseGoalsHandler = () => {
    setAddCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoals },
    ]);
    setShowGoalModal(false);
    setEnteredGoals("");
  };

  const deleteGoalHandler = (goalId) => {
    setAddCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const hideModalHandler = () => {
    setShowGoalModal(false);
  };

  return (
    <View style={styles.container}>
      <Button title="ADD YOURS GOALS" onPress={() => setShowGoalModal(true)} />
      <GoalInput
        showModal={showGoalModal}
        enteredGoal={enteredGoals}
        handlerForEnterence={enteredGoalHandler}
        handlerForAddingGoals={addCourseGoalsHandler}
        hideModal={hideModalHandler}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={addCourseGoals}
        renderItem={(itemData) => (
          <GoalItem
            listItem={itemData.item.value}
            Id={itemData.item.id}
            deleteGoal={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
