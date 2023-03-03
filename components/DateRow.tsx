import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import DateSelector from './DateSelector';
import TimePicker from './TimePicker';
import {Tracker, useTrackers} from '../TrackersProvider';

const DateRow = ({tracker}: {tracker: Tracker}) => {
  const {id, startTime, endTime} = tracker;
  const {updateTracker} = useTrackers();

  // Calculate total hours
  const totalHours = () => {
    const startHour = +tracker.startTime;
    const endHour = +tracker.endTime;
    const total = endHour - startHour;
    if (total < 0) {
      updateTracker('totalHours', total + 24, tracker.id);
      return;
    }
    updateTracker('totalHours', total, tracker.id);
  };

  useEffect(() => {
    if (tracker.startTime === '' || tracker.endTime === '') {
      return;
    }
    totalHours();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tracker.startTime, tracker.endTime]);

  return (
    <View>
      <View>
        <DateSelector tracker={tracker} />
      </View>
      <View>
        <TimePicker timeType="startTime" id={id} hour={startTime} />
        <TimePicker timeType="endTime" id={id} hour={endTime} />
        <View>
          <Text>Total Hours:</Text>
          <Text>{tracker.totalHours}</Text>
        </View>
      </View>
    </View>
  );
};

export default DateRow;
