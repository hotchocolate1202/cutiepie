import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';


const HistoryPage = ({navigation}) => {
  
  const [activeButton, setActiveButton] = useState('Stocking');

  const stockingData = [
    { StaffID: "SA001", StaffName: "Anna", Action: "updated stock out 50 for IT001", Date: "12/02/2024" },
    { StaffID: "SA002", StaffName: "John", Action: "updated stock in 100 for IT002", Date: "01/01/2025" },
  ];

  const transactionData = [
    { TransactionID: "TA001", ItemID: "IT002", SendTo: "SO003", From: "WA001", Qty: "15", Status: "Delivered" },
    { TransactionID: "TA002", ItemID: "IT004", SendTo: "SO004", From: "WA004", Qty: "20", Status: "Pending" },
  ];

  const renderStockingItem = ({ item }) => (
    <View style={styles.flatListItem}>
      <Text style={styles.flatListText}>{`${item.StaffName} (Staff)`}</Text>
      <Text style={styles.flatListText}>{item.Action}</Text>
      <Text style={styles.flatListText}>{item.Date}</Text>
    </View>
  );
  

  const renderTransactionItem = ({ item }) => (
    <View style={styles.flatListItem}>
      <Text style={styles.flatListText}>{`ItemID: ${item.ItemID}`}</Text>
      <Text style={styles.flatListText}>{`Send to: ${item.SendTo}`}</Text>
      <Text style={styles.flatListText}>{`From: ${item.From}`}</Text>
      <Text style={styles.flatListText}>{`Qty: ${item.Qty}`}</Text>
      <Text style={styles.flatListText}>{`Status: ${item.Status}`}</Text>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('D:/ReactNative/firstApp/assets/history.png')} style={styles.icon} />
        <Text style={styles.headerText}>History</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, activeButton === 'Stocking' && { backgroundColor: '#E75A7C' }]}
          onPress={() => setActiveButton('Stocking')}
        >
          <Text style={styles.buttonText}>Stocking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeButton === 'Transaction' && { backgroundColor: '#E75A7C' }]}
          onPress={() => setActiveButton('Transaction')}
        >
          <Text style={styles.buttonText}>Transaction</Text>
        </TouchableOpacity>
      </View>

      {activeButton === 'Stocking' ? (
        <FlatList
          data={stockingData}
          renderItem={renderStockingItem}
          keyExtractor={(item) => item.StaffID}
          style={styles.flatList}
        />
      ) : (
        <FlatList
          data={transactionData}
          renderItem={renderTransactionItem}
          keyExtractor={(item) => item.TransactionID}
          style={styles.flatList}
        />
      )}

      {/* Footer */}
      <View style={styles.footer}>
        {/* Home */}
        <View style={styles.footerItem}>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
            <Image source={require('D:/ReactNative/firstApp/assets/home.png')} style={styles.footerIcon} />
            <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>
        </View>

        {/* Stocking */}
        <View style={styles.footerItem}>
          <TouchableOpacity onPress={() => navigation.navigate('StockingPage')}>
            <Image source={require('D:/ReactNative/firstApp/assets/stocking.png')} style={styles.footerIcon} />
            <Text style={styles.footerText}>Stocking</Text>
          </TouchableOpacity>
        </View>

        {/* History */}
        <View style={styles.footerItem}>
          <TouchableOpacity onPress={() => navigation.navigate('HistoryPage')}>
            <Image source={require('D:/ReactNative/firstApp/assets/historypress.png')} style={styles.footerIcon} />
            <Text style={styles.footerText}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <View style={styles.footerItem}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
            <Image source={require('D:/ReactNative/firstApp/assets/profile.png')} style={styles.footerIcon} />
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 25,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#DEDBD4',
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DEDBD4',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFF',
    fontWeight: 'bold',
  },
  flatList: {
    marginTop: 20,
  },
  flatListItem: {
    backgroundColor: '#E9F5FF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  flatListText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Agar elemen di footer sejajar vertikal
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    position: 'absolute', // Agar footer selalu berada di bagian bawah layar
    bottom: 0, // Menempel di bagian bawah layar
    left: 0, // Menempel di sisi kiri layar
    right: 0, // Menempel di sisi kanan layar
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

export default HistoryPage;
