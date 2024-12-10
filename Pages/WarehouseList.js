import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';

const WarehouseList = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const initialWarehouse = [
    {
      warehouseID: "WA001",
      warehouseName: "Gudang A",
      warehouseLocation: "Jl. Apple No 3 SMG",
    },
    {
      warehouseID: "WA002",
      warehouseName: "Gudang B",
      warehouseLocation: "Jl. Orange No 5 JKT",
    },
    {
      warehouseID: "WA003",
      warehouseName: "Gudang C",
      warehouseLocation: "Jl. Banana No 7 BDG",
    },
    {
      warehouseID: "WA004",
      warehouseName: "Gudang D",
      warehouseLocation: "Jl. Kiwi No 4 SMG",
    },
    {
      warehouseID: "WA005",
      warehouseName: "Gudang E",
      warehouseLocation: "Jl. Grape No 12 JKT",
    },
  ];

  const warehouseCount = initialWarehouse.length;

  const [filteredWarehouse, setFilteredWarehouse] = useState(initialWarehouse);

  const handleSearch = (searchText) => {
    setSearch(searchText);

    if (searchText.trim() === "") {
      setFilteredWarehouse(initialWarehouse); 
    } else {
      const filtered = initialWarehouse.filter((warehouse) =>
        warehouse.warehouseID.toLowerCase().includes(searchText.toLowerCase()) ||
        warehouse.warehouseName.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredWarehouse(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage', { warehouseCount: warehouseCount })}>
          <Image
            source={require('D:/ReactNative/firstApp/assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('D:/ReactNative/firstApp/assets/warehouse.png')}
          style={styles.warehouseIcon}
        />
        <Text style={styles.headerTitle}>Warehouses</Text>
      </View>

      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search Warehouse"
        placeholderTextColor="#888"
        onChangeText={handleSearch}
        value={search}
      />

      {/* FlatList daftar warehouse */}
      <FlatList
        data={filteredWarehouse}
        renderItem={({ item }) => (
          <View style={styles.warehouseContainer}>
            <Text style={styles.warehouseText}>Warehouse ID: {item.warehouseID}</Text>
            <Text style={styles.warehouseText}>Warehouse Name: {item.warehouseName}</Text>
            <Text style={styles.warehouseText}>Warehouse Location: {item.warehouseLocation}</Text>
          </View>
        )}
        keyExtractor={(item) => item.warehouseID}
        contentContainerStyle={styles.listContainer}
      />

      {/* Tombol NEW WAREHOUSE di bawah */}
      <TouchableOpacity style={styles.newWarehouseButton}>
        <Text style={styles.newWarehouseButtonText}>NEW WAREHOUSE</Text>
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
  warehouseIcon: {
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

  warehouseContainer: {
    backgroundColor: '#E9F5FF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  warehouseText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  newWarehouseButton: {
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
  newWarehouseButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WarehouseList;
