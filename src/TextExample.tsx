import React from 'react';
import {View, Text} from 'react-native';

const TextExample = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontSize: 64,
          fontWeight: 'bold',
        }}>
        Hello World!!!
      </Text>
    </View>
  );
};

export default TextExample;
