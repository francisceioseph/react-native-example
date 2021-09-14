import React from 'react';
import {View, Text} from 'react-native';

const TextExample = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 64,
          fontWeight: 'bold',
        }}>
        Hello
        <Text style={{color: 'blue', fontStyle: 'italic', fontWeight: '200'}}>
          {' '}
          Fortaleza
        </Text>
      </Text>
    </View>
  );
};

export default TextExample;
