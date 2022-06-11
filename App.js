import { StatusBar } from 'expo-status-bar';
// import Realm from "realm";
import { StyleSheet, Text, View } from 'react-native';
import AccSensors from './components/AccSensors';
import GyroSensors from './components/GyroSensors';

export default function App() {
  // //DB schema
  // const TaskSchema = {
  //   name: "Task",
  //   properties: {
  //     _id: "int",
  //     name: "string",
  //     status: "string?",
  //   },
  //   primaryKey: "_id",
  // };

  // async function quickStart() {
  //   // use realm to interact with database
  //   const realm = await Realm.open({
  //     path: "myrealm",
  //     schema: [TaskSchema],
  //   });

  //   let task1, task2;
  //   // write reccords to database
  //   realm.write(() => {
  //     task1 = realm.create("Task", {
  //       _id: 1,
  //       name: "go grocery shopping",
  //       dateCreated: Date.now(),
  //       status: "Open",
  //     });

  //     task2 = realm.create("Task", {
  //       _id: 2,
  //       name: "go exercise",
  //       dateCreated: Date.now(),
  //       status: "Open",
  //     });
  //     console.log(`created two tasks: ${task1.name} & ${task2.name}`);
  //   });
  //   // use task1 and task2
  // }
  // Add a couple of Tasks in a single, atomic transaction
  return (
    <View style={styles.container}>
      <Text style={styles.header}>created by Daniel Edison</Text>
      <AccSensors />
      {/* <GyroSensors /> */}
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
