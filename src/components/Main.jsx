import ListComponent from './List';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Navbar from './Navbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  repo: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
  },
});

const Main = () => {
  const headerComponent = (
    <>
      <Navbar />
      <View style={styles.repo}>
        <Text style={styles.repo}>Repository Name</Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <ListComponent ListHeaderComponent={headerComponent} />
    </View>
  );
};

export default Main;