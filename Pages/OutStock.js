import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';

const OutStock = ({ navigation }) => {

  const initialOutStock = [
    {
      itemID: "IT009",
      itemName: "Silvia Bag",
      itemCategory: "Bag",
      itemQty: 0,
    },
    {
      itemID: "IT010",
      itemName: "Connie Bag",
      itemCategory: "Bag",
      itemQty: 0,
    },

  ];

  const itemOutCount = initialOutStock.length;

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage', { itemOutCount: itemOutCount })}>
          <Image
            source={require('D:/ReactNative/firstApp/assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('D:/ReactNative/firstApp/assets/outstock.png')}
          style={styles.itemIcon}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>Out of Stock</Text>
      </View>

      {/* FlatList daftar low item */}
      <FlatList
        data={initialOutStock}
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

export default OutStock;
