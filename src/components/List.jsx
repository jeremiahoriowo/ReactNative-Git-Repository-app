import { FlatList, StyleSheet, Text, View, Image } from "react-native";

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl:
      "https://tse1.mm.bing.net/th/id/OIP.kfM6gE5n_IxPxrdgZg7SigHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
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
    width: "98%",
  },

  headerTexts: {
    fontSize: 20,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  SubTexts: {
    fontSize: 13,
    flexShrink: 1,
    flexWrap: "wrap",
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  repo: {
    flexDirection: "row",
    gap: 10,
  },
  repoContent: {
    flex: 1,
    flexShrink: 1,
  },
  button: {
    padding: 5,
    backgroundColor: "blue",
    borderRadius: 3,
    color: "white",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "flex-start",
  },
});

export default function ListComponent() {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.repo}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        <View style={styles.repoContent}>
          <Text style={styles.headerTexts}>{item.fullName}</Text>
          <Text style={styles.SubTexts}>{item.description}</Text>
          <Text style={styles.button}>{item.language}</Text>
          <View>
          </View>
        </View>
      </View>
               <View style={{ flexDirection: "row", gap: 10, marginTop: 5, justifyContent: "space-evenly" }}>
              <View style={{ flexDirection: "column", gap: 10, marginTop: 5 }}>
                <Text style={styles}>{item.forksCount}</Text>
                <Text style={styles}>Forks</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 10, marginTop: 5 }}>
                <Text style={styles}>{item.stargazersCount}</Text>
                <Text style={styles}>Stars</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 10, marginTop: 5 }}>
                <Text style={styles}>{item.reviewCount}</Text>
                <Text style={styles}>Reviews</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 10, marginTop: 5 }}>
                <Text style={styles}>{item.ratingAverage}</Text>
                <Text style={styles}>Rating</Text>
              </View>
            </View>
    </View>
  );

  return (
    <View>
      <FlatList data={repositories} renderItem={renderItem} />
    </View>
  );
}
