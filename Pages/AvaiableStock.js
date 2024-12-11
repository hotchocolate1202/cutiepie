import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';

const AvaiableStock = ({ navigation }) => {

  const initialAvaiableStock = [
    {
      itemID: "IT001",
      itemName: "Anne Heels",
      itemCategory: "Heels",
      itemQty: 100,
    },
    {
      itemID: "IT002",
      itemName: "Claire Heels",
      itemCategory: "Heels",
      itemQty: 100,
    },
    {
      itemID: "IT003",
      itemName: "Joy Heels",
      itemCategory: "Heels",
      itemQty: 100,
    },
    {
      itemID: "IT004",
      itemName: "Baga Bag",
      itemCategory: "Bag",
      itemQty: 100,
    },
    {
      itemID: "IT005",
      itemName: "Aiko Bag",
      itemCategory: "Bag",
      itemQty: 100,
    },
  ];

  const itemAvailCount = initialAvaiableStock.length;

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage', { itemAvailCount : itemAvailCount })}>
          <Image
            source={require('D:/ReactNative/firstApp/assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('D:/ReactNative/firstApp/assets/avaiablestock.png')}
          style={styles.itemIcon}
        />
        <Text style={styles.headerTitle}>Available Stock</Text>
      </View>

      {/* FlatList daftar avaiable item */}
      <FlatList
        data={initialAvaiableStock}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Item ID: {item.itemID}</Text>
            <Text style={styles.itemText}>Item Name: {item.itemName}</Text>
            <Text style={styles.itemText}>Item Category: {item.itemCategory}</Text>
            <Text style={styles.itemText}>Item Quantity: {item.itemQty}</Text>
          </View>
        )}
        keyExtractor={(item) => item.itemID}
        contentContainerStyle={styles.listContainer}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5EA',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop : 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  itemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 80, 
  },

  itemContainer: {
    backgroundColor: '#E9F5FF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});

export default AvaiableStock;
