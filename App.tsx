import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import ViewExample from './src/components/ViewExample';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{minHeight: '100%'}}>
        <ViewExample />
      </View>
    </SafeAreaView>
  );
};

export default App;
