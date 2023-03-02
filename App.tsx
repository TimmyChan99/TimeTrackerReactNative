/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Text, View} from 'react-native';
import DateSelector from './components/DateSelector';
import TimePicker from './components/TimePicker';

function App(): JSX.Element {
  return (
    <View>
      <TimePicker timeType="Start Time" />
      <TimePicker timeType="End Time" />
      <DateSelector />
    </View>
  );
}

export default App;
