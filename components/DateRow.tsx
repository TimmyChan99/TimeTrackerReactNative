import {View} from 'react-native';
import React from 'react';
import DateSelector from './DateSelector';
import TimePicker from './TimePicker';

const DateRow = () => {
  return (
    <View>
      <DateSelector />
      <TimePicker timeType="Start Time" />
      <TimePicker timeType="End Time" />
    </View>
  );
};

export default DateRow;
