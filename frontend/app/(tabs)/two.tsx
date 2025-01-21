import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftColumn}>
          <Text>Left Column</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text>Right Column</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    height: 80,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1, // The content area will take up the remaining space
    flexDirection: 'row', // Arrange left and right columns horizontally
  },
  leftColumn: {
    flex: 1, // Left column takes 1/3 of the available width
    backgroundColor: 'lightgreen',
    padding: 10,
  },
  rightColumn: {
    flex: 2, // Right column takes 2/3 of the available width
    backgroundColor: 'lightyellow',
    padding: 10,
  },
  footer: {
    height: 60,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});
