import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const NewItem = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemQty, setItemQty] = useState();
  const [warehouseID, setItemWarehouseID] = useState('');
  const [itemShelfNumber, setItemShelfNumber] = useState('');

  const handleSave = () => {
    console.log('Item Saved:', itemName, itemCategory, itemQty, warehouseID, itemShelfNumber);
  
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header: Back Button */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require('D:/ReactNative/firstApp/assets/back.png')} 
            style={styles.backIcon}
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Please Fill Information Text */}
      <Text style={styles.infoText}>Please Fill for Item Information!</Text>

      {/* Item Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />

      {/* Item Category Input */}
      <TextInput
        style={styles.input}
        placeholder="Item Category"
        value={itemCategory}
        onChangeText={setItemCategory}
      />

   {/* Item Quantity Input */}
   <TextInput
        style={styles.input}
        placeholder="Item Quantity"
        value={itemQty}
        onChangeText={setItemQty}
      />

         {/* Item Warehouse ID Input */}
   <TextInput
        style={styles.input}
        placeholder="Warehouse ID"
        value={warehouseID}
        onChangeText={setItemWarehouseID}
      />

        {/* Item Shelf Number Input */}
   <TextInput
        style={styles.input}
        placeholder="Item Shelf Number"
        value={itemShelfNumber}
        onChangeText={setItemShelfNumber}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5EA',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop : 30,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  backText: {
    fontSize: 18,
    color: '#2D3A40',
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  saveButton: {
    backgroundColor: '#E75A7C',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewItem;
