import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProfilePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('D:/ReactNative/firstApp/assets/profile.png')}
          style={styles.icon}
        />
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('D:/ReactNative/firstApp/assets/profileround.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>User Name</Text>
        <Text style={styles.userEmail}>useremail@gmail.com</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UpdateProfile')}
      >
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UpdatePassword')}
      >
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>

      {/* Logout */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <View style={styles.logoutButton}>
            <Image
              source={require('D:/ReactNative/firstApp/assets/logout.png')}
              style={styles.logoutIcon}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Home */}
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Image
            source={require('D:/ReactNative/firstApp/assets/home.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        {/* Stocking */}
        <TouchableOpacity onPress={() => navigation.navigate('StockingPage')}>
          <Image
            source={require('D:/ReactNative/firstApp/assets/stocking.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Stocking</Text>
        </TouchableOpacity>
        {/* History */}
        <TouchableOpacity onPress={() => navigation.navigate('HistoryPage')}>
          <Image
            source={require('D:/ReactNative/firstApp/assets/history.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>History</Text>
        </TouchableOpacity>
        {/* Profile */}
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image
            source={require('D:/ReactNative/firstApp/assets/profilepress.png')}
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop : 25,
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
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 20,
    color: '#777',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E75A7C',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginBottom : 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  logoutContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logoutText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerIcon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
  footerText: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default ProfilePage;
