import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AccSensors from './components/AccSensors';
import GyroSensors from './components/GyroSensors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>created by Daniel Edison</Text>
      <AccSensors />
      <GyroSensors />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
  }
});
