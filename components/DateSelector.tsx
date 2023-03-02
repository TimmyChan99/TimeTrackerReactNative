import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const DateSelector = () => {
  const [date, setDate] = useState(new Date());
  const [isOpened, setIsOpened] = useState(false);
  return (
    <View>
      <Text>DateSelector</Text>
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
