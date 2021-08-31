import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import ButtonExample from './src/ButtonExample';
import TextExample from './src/TextExample';
import ViewExample from './src/ViewExample';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{minHeight: '100%'}}>
        <ButtonExample />
      </View>
    </SafeAreaView>
  );
};

export default App;
