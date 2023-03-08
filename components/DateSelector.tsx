import {View, Text, Button, Pressable} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Tracker, useTrackers} from '../TrackersProvider';

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

// Date selector component
const DateSelector = ({tracker}: {tracker: Tracker}) => {
  const {id, date, day} = tracker;
  const {updateTracker} = useTrackers();

  // control date picker modal
  const [isOpened, setIsOpened] = useState(false);

  // Navigate to next and previous day
  const dateNavigation = (action: string) => {
    const currentDate = new Date(date);
    const navigate = action === 'next' ? 1 : -1;
    currentDate.setDate(currentDate.getDate() + navigate);
    const {dateString, dayString} = setDateandDay(currentDate.toString());
    updateTracker('date', dateString, id);
    updateTracker('day', dayString, id);
  };

  // Defaut date and day if day is not set
  const {dateString: defaultDate, dayString: defaultDay} = setDateandDay(date);

  return (
    <View>
      <Pressable onPress={() => setIsOpened(true)}>
        <Button title="prev" onPress={() => dateNavigation('prev')} />
        <Text>{day === '' ? defaultDate : date}</Text>
        <Button title="next" onPress={() => dateNavigation('next')} />
        <Text>{day === '' ? defaultDay : day}</Text>
      </Pressable>
      <DatePicker
        modal
        mode="date"
        date={new Date()}
        open={isOpened}
        onConfirm={selectedDate => {
          const {dateString, dayString} = setDateandDay(
            selectedDate.toString(),
          );
          updateTracker('date', dateString, id);
          updateTracker('day', dayString, id);
          setIsOpened(false);
        }}
        onCancel={() => setIsOpened(false)}
      />
    </View>
  );
};

export default DateSelector;
