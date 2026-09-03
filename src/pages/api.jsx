import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Api({ navigation }) {
    const [apidata, setApidata] = useState([]);

    const apifetch = async () => {
        try {
            const api = await fetch(
                'https://jsonplaceholder.typicode.com/todos/'
            );

            const data = await api.json();

            setApidata(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={apifetch}>
                <Text>Fetch API</Text>
            </TouchableOpacity>

            <FlatList
                data={apidata}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
}