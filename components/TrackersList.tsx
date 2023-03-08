import {View, Button, ScrollView} from 'react-native';
import React from 'react';
import DateRow from './DateRow';
import {useTrackers} from '../TrackersProvider';

const TrackersList = () => {
  const {trackers, addTracker} = useTrackers();
  const trackersList = trackers.map(tracker => (
    <View key={tracker.id}>
      <DateRow tracker={tracker} />
    </View>
  ));

  return (
    <ScrollView>
      <Button title="Add Tracker" onPress={() => addTracker()} />
      {trackersList}
    </ScrollView>
  );
};

export default TrackersList;
