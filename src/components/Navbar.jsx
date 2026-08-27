import {View, StyleSheet, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    }
});

const Navbar = () => {
    return (
      <View>
        <LinearGradient
        colors ={['#000e4d', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{width: "1200px"}}>
          <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.text}>About</Text>
            <Text style={styles.text}>Services</Text>
            <Text style={styles.text}>Contact</Text>
            <Text style={styles.text}>About</Text>
          </View>
        </LinearGradient>
      </View>
    );
}

export default Navbar;