import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Image 
          source={require('D:/ReactNative/firstApp/assets/logo.png')} 
          style={styles.logo} 
        />
        <Text style={styles.headerTitle}>Yaystock</Text>
      </View>

   
      <View style={styles.summary}>
        <View style={styles.dateRow}>
          <Text style={styles.dateText}>Selasa, 5 November 2024</Text>
          <Image 
            source={require('D:/ReactNative/firstApp/assets/calender.png')} 
            style={styles.calendarIcon} 
          />
        </View>
        <View style={styles.stockRow}>
          <View style={styles.stockItem}>
            <Text style={styles.stockLabel}>Stock In</Text>
            <Text style={styles.stockIn}>0</Text>
          </View>
          <View style={styles.stockItem}>
            <Text style={styles.stockLabel}>Stock Out</Text>
            <Text style={styles.stockOut}>0</Text>
          </View>
        </View>
      </View>

      
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image 
            source={require('D:/ReactNative/firstApp/assets/avaiablestock.png')} 
            style={styles.cardIcon} 
            resizeMode="contain"
          />
          <Text style={styles.cardText}>
            <Text style={styles.cardNumber}>0</Text> Item
          </Text>
          <Text style={styles.cardSubtitle}>Available Stock</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={require('D:/ReactNative/firstApp/assets/lowstock.png')} 
            style={styles.cardIcon} 
            resizeMode="contain"
          />
          <Text style={styles.cardText}>
            <Text style={styles.cardNumber}>0</Text> Item
          </Text>
          <Text style={styles.cardSubtitle}>Low Stock (below 15)</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={require('D:/ReactNative/firstApp/assets/outstock.png')} 
            style={styles.cardIcon} 
            resizeMode="contain"
          />
          <Text style={styles.cardText}>
            <Text style={styles.cardNumber}>0</Text> Item
          </Text>
          <Text style={styles.cardSubtitle}>Out of Stock</Text>
        </View>
      </View>

{/* Warehouse and Store Cards */}
      <View style={styles.rowContainer}>
  <View style={styles.rowItem}>
    <Image 
      source={require('D:/ReactNative/firstApp/assets/warehouse.png')} 
      style={styles.rowIcon} 
      resizeMode="contain" 
    />
    <Text style={styles.rowText}>
      <Text style={styles.rowNumber}>0</Text> Warehouse
    </Text>
  </View>
  <View style={styles.rowItem}>
    <Image 
      source={require('D:/ReactNative/firstApp/assets/store.png')} 
      style={styles.rowIcon} 
      resizeMode="contain" 
    />
    <Text style={styles.rowText}>
      <Text style={styles.rowNumber}>0</Text> Store
    </Text>
  </View>
</View>


      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image 
            source={require('D:/ReactNative/firstApp/assets/homepress.png')} 
            style={styles.footerIcon} 
          />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image 
            source={require('D:/ReactNative/firstApp/assets/stocking.png')} 
            style={styles.footerIcon} 
          />
          <Text style={styles.footerText}>Stocking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image 
            source={require('D:/ReactNative/firstApp/assets/history.png')} 
            style={styles.footerIcon} 
          />
          <Text style={styles.footerText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image 
            source={require('D:/ReactNative/firstApp/assets/profile.png')} 
            style={styles.footerIcon} 
          />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
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
    backgroundColor: '#2D3A40',
    padding: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  summary: {
    backgroundColor: '#E9F5FF',
    padding: 16,
    margin: 10,
    borderRadius: 10,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 20,
    fontWeight: '600',
  },
  calendarIcon: {
    width: 26,
    height: 26,
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  stockItem: {
    alignItems: 'center',
  },
  stockLabel: {
    fontSize: 16,
  },
  stockIn: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  stockOut: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F44336',
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 20,  
  },
  card: {
    backgroundColor: '#E9F5FF',
    padding: 10, // Mengurangi padding agar kontainer lebih kecil
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    height: 120, // Mengurangi tinggi kontainer agar tidak terlalu besar
  },

  cardIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  cardText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#777',
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
  },
  footerText: {
    fontSize: 14,
    marginTop: 4,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    marginBottom: 2, // Menambahkan jarak ke bawah
  },

  rowItem: {
    backgroundColor: '#E9F5FF',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    width: '45%', // Membagi ruang 2 kontainer
    height: 90, // Mengurangi tinggi kontainer
  },
  rowIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  rowText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  rowNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3A40',
  },
  
});

export default HomePage;
