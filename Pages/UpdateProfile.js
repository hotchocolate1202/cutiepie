import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const UpdateProfile = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSaveChanges = () => {
  
    console.log('Updated User Name:', userName);
    console.log('Updated User Email:', userEmail);
    navigation.navigate('ProfilePage'); // Kembali ke halaman profile setelah perubahan
  };

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

      <Text style={styles.label}>Update UserName</Text>
      <TextInput
        style={styles.input}
        placeholder="Input New UserName"
        value={userName}
        onChangeText={setUserName}
      />

      <Text style={styles.label}>Update User Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Input New User Email"
        value={userEmail}
        onChangeText={setUserEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
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
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#fff',
    backgroundColor: '#FFF',  
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
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
});

export default UpdateProfile;