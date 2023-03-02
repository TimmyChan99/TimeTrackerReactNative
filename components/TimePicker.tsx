import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

const TimePicker = ({timeType}: {timeType: string}) => {
  const hours = [...Array(24).keys()].map(i => {
    const hour = i < 13 ? i : i - 12;
    const meridiem = i < 12 ? 'AM' : 'PM';
    return `${hour}:00 ${meridiem}`;
  });

  // Get the selected time value and convert it to 24 hour format
  const getSelectedTime = (selectedTime: string) => {
    const time = selectedTime.split(' ');
    const hour = time[0].split(':')[0];
    const meridiem = time[1];
    const hour24 = meridiem === 'AM' ? hour : parseInt(hour, 10) + 12;
    return `${hour24}`;
  };

  return (
    <View>
      <Text>{timeType}</Text>
      <SelectDropdown
        data={hours}
        defaultButtonText="Select time"
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
