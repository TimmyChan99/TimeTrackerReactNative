import {View, Text, Button, Pressable} from 'react-native';
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
  const [dateString2, setDateString2] = useState(dateString);
  const [dayString2, setDayString2] = useState(dayString);

  // Navigate to next and previous day
  const dateNavigation = (action: string) => {
    const currentDate = new Date(date);
    const navigate = action === 'next' ? 1 : -1;
    currentDate.setDate(currentDate.getDate() + navigate);
    const {dateString, dayString} = setDateandDay(currentDate.toString());
    setDateString2(dateString);
    setDayString2(dayString);
    console.log(date);
  };

  return (
    <View>
      <Pressable onPress={() => setIsOpened(true)}>
        <Button title="prev" onPress={() => dateNavigation('prev')} />
        <Text>{dateString2}</Text>
        <Button title="next" onPress={() => dateNavigation('next')} />
        <Text>{dayString2}</Text>
      </Pressable>
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
