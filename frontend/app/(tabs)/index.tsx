import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text>Box 3</Text>
      </View>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // The container will take up the full available space
    flexDirection: 'column', // Arrange items vertically (default is column)
    justifyContent: 'space-around', // Distribute space evenly around items
    alignItems: 'center', // Center items horizontally
    backgroundColor: '#f0f0f0', // Light gray background
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
