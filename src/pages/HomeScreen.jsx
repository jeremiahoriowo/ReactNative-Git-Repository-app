import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import ListComponent from '../components/List';


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

export default function HomeScreen({navigation}) {
    return(
        <ScrollView style={styles.container}>
            <Navbar/>
                 <View style={styles.repo}>
                    <Text style={styles.repo}>Repository Name</Text>
                  </View>
                    <ListComponent/>
            <Button 
            title="View Profile"
            onPress={() => navigation.navigate("Profile")}
            />
        </ScrollView>
    )
}