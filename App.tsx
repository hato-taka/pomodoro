import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TimerCountDownDisplay } from './TimerCountDownDisplay';
import { TimerToggleButton } from './TimerToggleButton';
import { TimerModeDisplay, TimerModes } from './TimerModeDisplay';

const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;

export default function App() {
  const [timerCount, setTimerCount] = useState<number>(12 * 1000)
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)
  const [timerMode, setTimerMode] = useState<TimerModes>('Focus')

  useEffect(() => {
    if(timerCount === 0) {
      if(timerMode === 'Focus'){
        setTimerMode('Break')
        setTimerCount(BREAK_TIME_MINUTES)
      } else {
        setTimerMode('Focus')
        setTimerCount(FOCUS_TIME_MINUTES)
      }
      stopTimer();
    }
  }, [timerCount])

  const startTimer = () => {
    setIsTimerRunning(true)
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000)
    setTimerInterval(id)
  }

  const stopTimer = () => {
    if(timerInterval !== null) {
      clearInterval(timerInterval)
    } 
    setIsTimerRunning(false)
  }

  return (
    <View style={{
      ...styles.container, 
    ...{backgroundColor: timerMode === 'Break' ? "#7b5544" : "#d95550"
    }}}>
      <TimerModeDisplay timerMode={timerMode} />
      <StatusBar style="auto" />
      <TimerToggleButton isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer} />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d95550',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
