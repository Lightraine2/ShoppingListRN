import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);  
    });
  }

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [
         { text: 'Ok' },
      ],
      {cancelable: true},
      ); 
    } else {
    setItems(prevItems => {
      return [{id: uuid(), text: text}, ...prevItems];
    });
  }
  }

  return (
    <View style={styles.container}>
        <Header title='Shopping List'/>
        <AddItem addItem={addItem}/>
        <FlatList 
        data={items} 
  renderItem={({item}) => (<ListItem item={item}
      deleteItem={deleteItem} />
      )}      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60,
  },
 

});

export default App;