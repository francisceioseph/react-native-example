import React from 'react';
import {View} from 'react-native';

const ViewExample = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: 'green',
          width: 120,
          height: 120,
          margin: 16,
        }}
      />

      <View
        style={{
          backgroundColor: 'blue',
          width: 120,
          height: 120,
          margin: 16,
        }}
      />
    </View>
  );
};

export default ViewExample;
