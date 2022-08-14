import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
    //same name as App.js but should not clash n/c diff component
    //call App.js goal handler via props
    //reset input
  }


  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/qq.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='add games'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add' onPress={addGoalHandler} color='#7B50FF' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 15,
    backgroundColor: '#B4ACCC',
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#e4d0ff',
    padding: 8,
    borderRadius: 20,
    padding: 16,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 16,
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
});
