import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import FantuanImage from './FantuanImage';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title1: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title1: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title1: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
    title1: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
    title1: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title1: 'Third Item',
  },
];

const Item = ({ title }) => (
    <View style={styles.item}>
      <FantuanImage
        // source={{uri:"https://i.picsum.photos/id/1084/200/200.jpg?hmac=xQYOwJzrnLV26FtETQNbcf3y4H2IUqFTWagLcKPfrbA"}}
        style={{width:100,height:100}}
      ></FantuanImage>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
 const renderItem1 = ({ item }) => (
    <Item title={item.title} />
  );
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item })=> (
    <Item title={item.title1} />)}
        keyExtractor={(item) => (item.id)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 32,
  },
});

export default App;