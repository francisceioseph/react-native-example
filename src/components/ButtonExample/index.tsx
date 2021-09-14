import React from 'react';
import {Alert, Button, View} from 'react-native';

const ButtonExample = () => {
  const handleButtonPress = () => Alert.alert('Hello');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Oferta especial!!!"
        color="#841584"
        accessibilityLabel="clique aqui para exibir um alerta"
        onPress={handleButtonPress}
      />
    </View>
  );
};

export default ButtonExample;
