import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>Overlay</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    margin: 10,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    margin: 10,
  },
  overlay: {
    position: 'absolute',
    top: 50,
    left: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    padding: 10,
  },
  overlayText: {
    color: 'white',
    fontSize: 16,
  },
});
