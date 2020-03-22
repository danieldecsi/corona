import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SubmitLocationDataRequest } from '@shared/types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const a: SubmitLocationDataRequest = {
  deviceId: 'deviceId',
  locations: [],
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}
