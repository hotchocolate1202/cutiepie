import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';

const StoreList = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const initialStore = [
    {
      storeID: "SO001",
      storeName: "Toko A",
      storeLocation: "Jl. Mawar No 1 SMG",
    },
    {
        storeID: "SO002",
        storeName: "Toko B",
      storeLocation: "Jl. Melati No 2 JKT",
    },
    {
      storeID: "SO003",
      storeName: "Toko C",
      storeLocation: "Jl. Sepatu No 4 BDG",
    },
    {
      storeID: "SO004",
      storeName: "Toko D",
      storeLocation: "Jl. Tulip No 10 SMG",
    },
    {
      storeID: "SO005",
      storeName: "Toko E",
      storeLocation: "Jl. Bulan No 12 JKT",
    },
  ];

  const storeCount = initialStore.length;

  const [filteredStore, setfilteredStore] = useState(initialStore);

  const handleSearch = (searchText) => {
    setSearch(searchText);

    if (searchText.trim() === "") {
      setfilteredStore(initialStore); // Reset jika input kosong
    } else {
      const filtered = initialStore.filter((store) =>
        store.storeID.toLowerCase().includes(searchText.toLowerCase()) ||
        store.storeName.toLowerCase().includes(searchText.toLowerCase())
      );
      setfilteredStore(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage', { storeCount: storeCount })}>
          <Image
            source={require('D:/ReactNative/firstApp/assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('D:/ReactNative/firstApp/assets/store.png')}
          style={styles.storeIcon}
        />
        <Text style={styles.headerTitle}>Stores</Text>
      </View>

      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search Store"
        placeholderTextColor="#888"
        onChangeText={handleSearch}
        value={search}
      />

      {/* FlatList daftar store */}
      <FlatList
        data={filteredStore}
        renderItem={({ item }) => (
          <View style={styles.storeContainer}>
            <Text style={styles.storeText}>Store ID: {item.storeID}</Text>
            <Text style={styles.storeText}>Store Name: {item.storeName}</Text>
            <Text style={styles.storeText}>Store Location: {item.storeLocation}</Text>
          </View>
        )}
        keyExtractor={(item) => item.storeID}
        contentContainerStyle={styles.listContainer}
      />

      {/* Tombol NEW STORE di bawah */}
      <TouchableOpacity style={styles.newStoreButton}>
        <Text style={styles.newStoreButtonText}>NEW STORE</Text>
      </TouchableOpacity>
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
  storeIcon: {
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
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listContainer: {
    paddingBottom: 80, 
  },

  storeContainer: {
    backgroundColor: '#E9F5FF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  storeText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  newStoreButton: {
    position: 'absolute',
    bottom: 10,
    left: 16,
    right: 16,
    height: 50,
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
  newStoreButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StoreList;
