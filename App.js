import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { storeRecords, fetchRecords } from './database';

export default function App() {
  const [records, setRecords] = useState([])
  const [record, setRecord] = useState('')

  useEffect(() => {fetchRecords(setRecords)}, [])

  const addRecord = () => {
    console.log(`Records = ${records}`)
    const recs = [...records, record]
    storeRecords(recs)
    setRecord('')
  }

  const removeRecord = (item) => {
    storeRecords(records.filter(e => e !== item))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={record} onChangeText={setRecord} />
        <TouchableOpacity onPress={() => addRecord()}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={records}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => removeRecord(item)}>
                <Text style={styles.item}>{item}</Text>
                <FontAwesome name="remove" style={styles.icon}/>
              </TouchableOpacity>
          )} 
        />
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  inputContainer:{
    flexDirection:'row',
  },

  listContainer:{
    flex: 1,
    marginTop: 20,
  },

  itemContainer:{
    flexDirection: 'row',
    marginBottom: 5,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'steelblue',
    color: 'white',
    padding: 8,
    marginLeft: 10,
    borderRadius: 10,
  },

  item:{
    flex:1 ,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  icon: {
    color: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    marginLeft: 10,
  }
});
