import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import ListComponent from "../components/List";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  repo: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    fontWeight: "bold",
  },
  button: {
    padding:10,
    backgroundColor: "red",
    color: "white",
    width: "fit-content",
  }
});

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <View style={styles.repo}>
        <Text style={styles.repo}>Repository Name</Text>
      </View>
      <ListComponent />
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.button}
      >
        <Text>View Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Form")}
        style={styles.button}
      >
        <Text>View Form Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Api")}
        style={styles.button}
      >
        <Text>View API Page</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
