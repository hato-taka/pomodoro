import React from "react";
import { Button, Pressable, View } from "react-native"
import { FontAwesome} from "@expo/vector-icons"

type Props = {
    isTimerRunning: boolean,
    stopTimer: () => void,
    startTimer: () => void
}

export const TimerToggleButton: React.FC<Props> = ({isTimerRunning, startTimer, stopTimer})=> {
  return (
    <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
        <View>
            <FontAwesome name={isTimerRunning ? 'pause' : 'play'} size={125} color="red" />
        </View>
    </Pressable>
)
}

