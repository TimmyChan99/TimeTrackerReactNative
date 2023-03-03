import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';
import DateRow from './DateRow';

const TrackersList = () => {
  const [trackers, setTrackers] = React.useState([1]);
  const trackersList = trackers.map(tracker => (
    <View key={tracker}>
      <Text>Tracker {tracker}</Text>
      <DateRow />
    </View>
  ));

  // Add a new tracker
  const addTracker = () => {
    const newTracker = trackers.length + 1;
    setTrackers([...trackers, newTracker]);
  };
  return (
    <ScrollView>
      <Button title="Add Tracker" onPress={() => addTracker()} />
      {trackersList}
    </ScrollView>
  );
};

export default TrackersList;
