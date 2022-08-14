import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  function startAddGoalHandler() {
    setVisibleModal(true);
  }
  function endAddGoalHandler() {
    setVisibleModal(false);
  }

  function addGoalHandler(enteredGoalText) {
    //button handler sets state -> spreads past state then adds updated state
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    //best practice is to use a function to return update state
    //ESP if new state depends on previous state
    endAddGoalHandler();
    //after updating state
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Text style={styles.title}>Games To Play</Text>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./assets/images/toad.png')}
        >
          <Pressable onPress={startAddGoalHandler} style={styles.titleButton}>
            <View style={styles.rowTitle}>
              <Text style={styles.plusButton}>+</Text>
            </View>
          </Pressable>
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={visibleModal}
            onCancel={endAddGoalHandler}
          />

          <View style={styles.goalsContainer}>
            <FlatList
              alwaysBounceVertical={false}
              data={courseGoals}
              renderItem={(itemData) => {
                //renderItem (itemData ) ---- itemData is an object with metadata and item property
                return (
                  <GoalItem
                    id={itemData.item.id}
                    text={itemData.item.text}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#B0A5D3',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    marginTop: 16,
  },
  goalsContainer: {
    flex: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  plusButton: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
  },
  rowTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
    marginHorizontal: 169,
    opacity: 0.8,
    paddingBottom: 3,
  },
});

/* NOTES* 
- App.Js = root component
- cannot use h2 or divs or any HTML elements with DOM ; but wont work here
- <div> = <View>
- <input> = <TextInput>
- <view> = build boxes that hold content w/in respective elements
*/
