import {View} from 'react-native';
import React from 'react';
import DateSelector from './DateSelector';
import TimePicker from './TimePicker';
import {Tracker} from '../TrackersProvider';

const DateRow = ({tracker}: {tracker: Tracker}) => {
  const {id, startTime, endTime} = tracker;
  return (
    <View>
      <DateSelector tracker={tracker} />
      <TimePicker timeType="startTime" id={id} hour={startTime} />
      <TimePicker timeType="endTime" id={id} hour={endTime} />
    </View>
  );
};

export default DateRow;
