import React from 'react';
import {Alert, Button, View} from 'react-native';

const ButtonExample = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        onPress={() => {
          Alert.alert('Hello World!');
        }}
        title="Aperte"
        color="#841584"
        accessibilityLabel="clique aqui para exibir um alerta"
      />
    </View>
  );
};

export default ButtonExample;
