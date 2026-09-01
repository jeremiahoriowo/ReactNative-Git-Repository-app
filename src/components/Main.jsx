import ListComponent from './List';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
import Navbar from './Navbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  repo:{
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    fontWeight: 'bold',

  }
});

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <View style={styles.repo}>
        <Text style={styles.repo}>Repository Name</Text>
      </View>
        <ListComponent/>
    </ScrollView>
  );
};

export default Main;