import { View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import Slider from "@react-native-community/slider";
import {useState} from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button:{
    padding: 8,
    borderRadius:4,
    backgroundColor: "red",
    color: "white",
    fontSize: 20,
    width: "fit-content"
  }
});

function submit(){
    return(
        <View>
            <Text>Name: {name}</Text>
            <Text>email: {email}</Text>
            <Text>Comment: {comment}</Text>
            <Text>Rating: {rating}</Text>
        </View>
    )
}

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const submit= () =>{
    return(
        <View>
            <Text>Name: {name}</Text>
            <Text>email: {email}</Text>
            <Text>Comment: {comment}</Text>
            <Text>Rating: {rating}</Text>
        </View>
    )
}
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} 
      placeholder="Enter your name" 
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Name: {name}</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"

        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Text style={styles.label}>Comments</Text>
      <TextInput
        style={styles.input}
        placeholder="comment"
        keyboardType="default"
        autoCapitalize="none"
        multiline
      />

      <Text style={styles.label}>Rating</Text>
      <Slider minimumValue={0} maximumValue={10} step={1} 
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      value={rating}
      onValueChange={setRating}
      />
      <Text style={styles.label}>Rating: {rating}</Text>

      <TouchableOpacity 
      style={styles.button}
      onPress={submit}
      >
        <Text style={{color: "white"}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
