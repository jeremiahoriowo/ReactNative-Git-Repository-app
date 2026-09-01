import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    flexWrap: 'wrap',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    flexWrap: 'wrap',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.12)',
    overflow: 'hidden',
  },
});

const Navbar = () => {
  return (
    <LinearGradient
      colors={['#000e4d', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.header}
    >
      <View style={styles.container}>

        <View style={styles.navItems}>
          <Text style={styles.text}>Home</Text>
          <Text style={styles.text}>About</Text>
          <Text style={styles.text}>Services</Text>
          <Text style={styles.text}>Contact</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Navbar;