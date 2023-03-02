/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Text, View} from 'react-native';
import TimePicker from './components/TimePicker';

function App(): JSX.Element {
  return (
    <View>
      <TimePicker timeType="Start Time" />
      <TimePicker timeType="End Time" />
    </View>
  );
}

export default App;
