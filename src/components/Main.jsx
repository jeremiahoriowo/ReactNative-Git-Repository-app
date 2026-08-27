import ListComponent from './List';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <ListComponent/>
    </View>
  );
};

export default Main;