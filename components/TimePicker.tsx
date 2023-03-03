import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {useTrackers} from '../TrackersProvider';

const TimePicker = ({
  timeType,
  hour,
  id,
}: {
  timeType: string;
  hour: string;
  id: string;
}) => {
  // Create an array of hours
  const hours = [...Array(24).keys()].map(i => {
    const hourTime = i < 13 ? i : i - 12;
    const meridiem = i < 12 ? 'AM' : 'PM';
    return `${hourTime}:00 ${meridiem}`;
  });

  const {updateTracker} = useTrackers();

  // Update tracker value
  const handleChange = (value: string) => {
    if (timeType === 'startTime') {
      updateTracker('startTime', value, id);
    }
    if (timeType === 'endTime') {
      updateTracker('endTime', value, id);
    }
  };

  // Get the selected time value and convert it to 24 hour format
  const getSelectedTime = (selectedTime: string) => {
    const time = selectedTime.split(' ');
    const hourTime = time[0].split(':')[0];
    const meridiem = time[1];
    const hour24 = meridiem === 'AM' ? hourTime : parseInt(hourTime, 10) + 12;
    handleChange(hour24.toString());
    return `${hour24}`;
  };

  const displayTime = () => {
    if (hour !== '') {
      const hour24 = parseInt(hour, 10);
      const hourTime = hour24 < 13 ? hour24 : hour24 - 12;
      const meridiem = hour24 < 12 ? 'AM' : 'PM';
      return `${hourTime}:00 ${meridiem}`;
    }
    return 'Select time';
  };

  return (
    <View>
      <Text>{timeType}</Text>
      <SelectDropdown
        data={hours}
        defaultButtonText={displayTime()}
        onSelect={selectedItem => {
          getSelectedTime(selectedItem);
        }}
        buttonStyle={styles.btnStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'none',
    borderWidth: 1,
    borderColor: '#32A071',
    borderRadius: 5,
  },
});

export default TimePicker;
