import React, {createContext, ReactNode, useContext} from 'react';
import uuid from 'react-native-uuid';

type Tracker = {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  totalHours: number;
  day: string;
};

type TrackersContextType = {
  trackers: Tracker[];
  addTracker: () => void;
  updateTracker: (key: string, value: string | number, id: string) => void;
};

const trackerInitialValue = {
  id: '',
  date: new Date().toString(),
  startTime: '',
  endTime: '',
  totalHours: 0,
  day: '',
};

export const TrackersContext = createContext<TrackersContextType>({
  trackers: [],
  addTracker: () => {},
  updateTracker: () => {},
});

export const useTrackers = () => useContext(TrackersContext);

const TrackersProvider = ({children}: {children: ReactNode}) => {
  const [trackers, setTrackers] = React.useState<Tracker[]>([]);

  const addTracker = () => {
    const newTracker = trackerInitialValue;
    setTrackers([...trackers, {...newTracker, id: uuid.v4() as string}]);
  };

  // Update tracker value
  const updateTracker = (key: string, value: string | number, id: string) => {
    setTrackers(prevTrackers => {
      const newTrackers = prevTrackers.map(tracker => {
        if (tracker.id === id) {
          return {
            ...tracker,
            [key]: value,
          };
        }
        return tracker;
      });
      return newTrackers;
    });
  };

  const value = {trackers, addTracker, updateTracker};
  return (
    <TrackersContext.Provider value={value}>
      {children}
    </TrackersContext.Provider>
  );
};

export default TrackersProvider;
export type {Tracker};
