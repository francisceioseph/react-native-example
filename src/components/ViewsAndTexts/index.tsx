import React from 'react';
import {View, Text} from 'react-native';

const ViewsAndTextExercise = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{margin: 16}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          I am a Header
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 16,
          backgroundColor: '#e2e2e2',
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
          }}>
          I am the body
        </Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          margin: 16,
        }}>
        I am a footer
      </Text>
    </View>
  );
};

export default ViewsAndTextExercise;
