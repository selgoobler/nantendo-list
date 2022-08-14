import { StyleSheet, View, Text, Pressable,  } from 'react-native';

export default function GoalItem(props) {
  return (

    <View style={styles.inputItem}>
      <Pressable
        android_ripple={{ color: '#927CD3' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        //  binding this
        style={({ pressed }) => pressed && styles.pressedItem}
        //object destructuring via Pressable - pressedData => pressedData.pressed
        //if pressed exists, then add styling
      >
     
        <Text style={styles.inputText}>{props.text}</Text>
      </Pressable>
    </View>
    
  );
}

const styles = StyleSheet.create({
  inputItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#927CD3',
  },
  inputText: {
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
