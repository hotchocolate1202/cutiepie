import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const ItemDetail = ({ route, navigation }) => {
  const { itemID } = route.params;

  const intialItem = [
    {
      itemID: "IT001",
      itemName: "Anne Heels",
      itemCategory: "Heels",
      itemQty: 100,
      warehouseID: "WA001",
      itemShelfNumber: "A01-12",
    },
    {
      itemID: "IT002",
      itemName: "Claire Heels",
      itemCategory: "Heels",
      itemQty: 100,
      warehouseID: "WA002",
      itemShelfNumber: "B01-12",
    },
  ];

  const selectedItem = intialItem.find(item => item.itemID === itemID);

  if (!selectedItem) {
    return (
      <View style={styles.container}>
        <Text>Item not found</Text>
      </View>
    );
  }

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

      {/* Item details */}
      <View style={styles.itemDetailContainer}>
        <Text style={styles.itemDetailText}>Item ID: {selectedItem.itemID}</Text>
        <Text style={styles.itemDetailText}>Item Name: {selectedItem.itemName}</Text>
        <Text style={styles.itemDetailText}>Item Category: {selectedItem.itemCategory}</Text>
        <Text style={styles.itemDetailText}>Item Quantity: {selectedItem.itemQty}</Text>
        <Text style={styles.itemDetailText}>Warehouse ID: {selectedItem.warehouseID}</Text>
        <Text style={styles.itemDetailText}>Item Shelf Number: {selectedItem.itemShelfNumber}</Text>
      </View>

      {/* Tombol Manage Stock */}
      <TouchableOpacity 
        style={styles.manageStockButton}
        onPress={() => navigation.navigate('ManageStock')}
      >
        <Text style={styles.manageStockButtonText}>Manage Stock</Text>
      </TouchableOpacity>

      {/* Tombol Add Transaction */}
      <TouchableOpacity 
        style={styles.addTransactionButton}
        onPress={() => navigation.navigate('AddTransaction')}
      >
        <Text style={styles.addTransactionButtonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5EA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 20,
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
  itemDetailContainer: {
    backgroundColor: '#E9F5FF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemDetailText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  manageStockButton: {
    position: 'static',
    bottom: 10,
    left: 16,
    right: 16,
    height: 50,
    marginBottom: 100,
    backgroundColor: '#E75A7C',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  manageStockButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addTransactionButton: {
    position: 'static',
    bottom: 10,
    left: 16,
    right: 16,
    height: 50,
    marginBottom: 50,
    backgroundColor: '#E75A7C',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addTransactionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ItemDetail;
