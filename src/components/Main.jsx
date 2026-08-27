import ListComponent from './List';
import { View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 35,
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
    <View style={styles.container}>
      <View style={styles.repo}>
        <Text style={styles.repo}>Repository Name</Text>
      </View>
        <ListComponent/>
    </View>
  );
};

export default Main;