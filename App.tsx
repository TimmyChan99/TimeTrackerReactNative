/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Text, View} from 'react-native';
import TrackersList from './components/TrackersList';

function App(): JSX.Element {
  return (
    <View>
      <TrackersList />
    </View>
  );
}

export default App;
