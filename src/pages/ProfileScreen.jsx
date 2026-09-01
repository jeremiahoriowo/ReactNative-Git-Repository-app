import {View, Text, Button} from 'react-native';

export default function ProfileScreen({navigation}) {
    return(
        <View>
            <Text>This is our Profile Page</Text>
            <Button 
            title="View Profile"
            onPress={() => navigation.navigate("Profile")}
            />
        </View>
    )
}