import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

// Set date and day from input. This is used to display the date and day in string format
const setDateandDay = (date: string) => {
  const dateInput = new Date(date);
  const dateString = dateInput.toLocaleDateString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const day = dateInput.getDay();
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayString = weekday[day];
  return {dateString, dayString};
};

const DateSelector = () => {
  const [date, setDate] = useState(new Date());
  const [isOpened, setIsOpened] = useState(false);
  const {dateString, dayString} = setDateandDay(date.toString());

  return (
    <View>
      <Text>{dateString}</Text>
      <Text>{dayString}</Text>
      <Button title="Select Date" onPress={() => setIsOpened(true)} />
      <DatePicker
        modal
        mode="date"
        date={date}
        open={isOpened}
        onConfirm={date => {
          setDate(date);
          setIsOpened(false);
          console.log(date);
        }}
        onCancel={() => setIsOpened(false)}
      />
    </View>
  );
};

export default DateSelector;
