import { FlatList, StyleSheet, Text, View } from "react-native";

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const List = new Array(100)
  .fill(null)
  .map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    borderColor: "red",
    borderWidth: 3,
    margin: 5,
  },

  texts: {
    fontSize: 20,
  },
});

export default function ListComponent() {
  return (
    <View>
      <FlatList
        data={repositories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.texts}>id: {item.id}</Text>
            <Text style={styles.texts}>FullName: {item.fullName}</Text>
            <Text style={styles.texts}>Description: {item.description}</Text>
            <Text style={styles.texts}>Language {item.language}</Text>
          </View>
        )}
      />
    </View>
  );
}
