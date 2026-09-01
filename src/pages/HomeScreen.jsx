import {View, Text, Button} from 'react-native';

export default function HomeScreen({navigation}) {
    return(
        <View>
            <Text>This is our Home Screen Page</Text>
            <Button 
            title="View Profile"
            onPress={() => navigation.navigate("Profile")}
            />
        </View>
    )
}