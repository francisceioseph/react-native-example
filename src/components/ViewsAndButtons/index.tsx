import React from 'react';
import {View, Button, Alert} from 'react-native';

const ViewAndButtons = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{margin: 16}}>
        <Button
          title="Press me"
          color="#CBAC88"
          onPress={() => Alert.alert('You pressed me!!!')}
        />
      </View>
      <View style={{margin: 16}}>
        <Button
          title="Cannot Press Me"
          disabled
          color="#69995D"
          onPress={() => Alert.alert('You pressed me!!!')}
        />
      </View>
      <View
        style={{
          margin: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          title="Left Button"
          color="#EDB6A3"
          onPress={() => Alert.alert('You pressed me!!!')}
        />
        <Button
          title="Right Button"
          color="#065143"
          onPress={() => Alert.alert('You pressed me!!!')}
        />
      </View>
    </View>
  );
};

export default ViewAndButtons;
