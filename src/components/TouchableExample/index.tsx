import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TouchableOpacityExample = () => {
  const [count, setCount] = useState(0);

  const handleOnAddPress = () => setCount(prevCount => prevCount + 1);

  const handleOnSubtractPress = () =>
    setCount(prevCount => {
      return prevCount > 0 ? prevCount - 1 : prevCount;
    });

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleOnSubtractPress}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleOnAddPress}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    margin: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C64191',
    backgroundColor: '#C64191',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 48,
    color: '#FFFFFF',
  },
  countContainer: {
    alignItems: 'center',
    backgroundColor: '#81AE9D',
    padding: 32,
    borderRadius: 16,
  },
  countText: {
    textAlign: 'center',
    fontSize: 64,
    color: '#ffffff',
  },
});

export default TouchableOpacityExample;
