import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';

const StockingPage = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const intialItem = [
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

  const itemCount = intialItem.length;

  const [filteredItem, setfilteredItem] = useState(intialItem);

  const handleSearch = (searchText) => {
    setSearch(searchText);

    if (searchText.trim() === "") {
      setfilteredItem(intialItem); 
    } else {
      const filtered = intialItem.filter((item) =>
        item.itemID.toLowerCase().includes(searchText.toLowerCase()) ||
        item.itemName.toLowerCase().includes(searchText.toLowerCase())
      );
      setfilteredItem(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('D:/ReactNative/firstApp/assets/stocking.png')}
          style={styles.stockingIcon}
        />
        <Text style={styles.headerTitle}>Stocking</Text>
      </View>

      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search Item"
        placeholderTextColor="#888"
        onChangeText={handleSearch}
        value={search}
      />

      {/* FlatList daftar item */}
      <FlatList
        data={filteredItem}
        renderItem={({ item }) => (
            <TouchableOpacity 
            style={styles.itemContainer}
            onPress={() => navigation.navigate('ItemDetail', { itemID: item.itemID })}
          >
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Item ID: {item.itemID}</Text>
            <Text style={styles.itemText}>Item Name: {item.itemName}</Text>
            <Text style={styles.itemText}>Item Category: {item.itemCategory}</Text>
            <Text style={styles.itemText}>Item Quantity: {item.itemQty}</Text>
          </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.itemID}
        contentContainerStyle={styles.listContainer}
      />

      {/* Tombol NEW item di bawah */}
      <TouchableOpacity 
      style={styles.newitemButton}
      onPress={() => navigation.navigate('NewItem')}
      >
        <Text style={styles.newitemButtonText}>Add New Item</Text>
      </TouchableOpacity>
    
  
      <View style={styles.footer}>
    {/* Home */}
    <View style={styles.footerItem}>
    <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
      <Image
        source={require('D:/ReactNative/firstApp/assets/home.png')}
        style={styles.footerIcon}
      />
      <Text style={styles.footerText}>Home</Text>
    </TouchableOpacity>
  </View>

      {/* Stocking */}
  <View style={styles.footerItem}>
    <TouchableOpacity onPress={() => navigation.navigate('StockingPage')}>
      <Image
        source={require('D:/ReactNative/firstApp/assets/stockingpress.png')}
        style={styles.footerIcon}
      />
      <Text style={styles.footerText}>Stocking</Text>
    </TouchableOpacity>
  </View>

        {/* History */}
  <View style={styles.footerItem}>
    <TouchableOpacity onPress={() => navigation.navigate('HistoryPage')}>
      <Image
        source={require('D:/ReactNative/firstApp/assets/history.png')}
        style={styles.footerIcon}
      />
      <Text style={styles.footerText}>History</Text>
    </TouchableOpacity>
  </View>
  
        {/* Profile */}
  <View style={styles.footerItem}>
    <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
      <Image
        source={require('D:/ReactNative/firstApp/assets/profile.png')}
        style={styles.footerIcon}
      />
      <Text style={styles.footerText}>Profile</Text>
    </TouchableOpacity>
    </View>
</View>
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
    marginTop : 20,
  },
  stockingIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBox: {
    width: '90%', 
    height: 45, 
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,  
    marginTop : 1,
    alignSelf: 'center', 
    hadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listContainer: {
    paddingHorizontal: 16,
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
  newitemButton: {
    position: 'static',
    bottom: 10,
    left: 16,
    right: 16,
    height: 50,
    marginBottom : 10,
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
  newitemButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  footerItem: {
    alignItems: 'center',
      },
  footerIcon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
  footerText: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default StockingPage;
