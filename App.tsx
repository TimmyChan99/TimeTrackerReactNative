/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import TrackersList from './components/TrackersList';
import TrackersProvider from './TrackersProvider';

function App(): JSX.Element {
  return (
    <TrackersProvider>
      <TrackersList />
    </TrackersProvider>
  );
}

export default App;
