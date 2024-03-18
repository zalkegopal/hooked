import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View style={{ height: 200, backgroundColor: 'pink', width: '100%' }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
          }}
        >
          <Image
            style={{ width: 150, height: 80, resizeMode: 'contain' }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/6655/6655045.png',
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'GiliSans-SemibBold',
          }}
        >
          Hooked
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 25, color: '#F9629F' }}>
            Login to your account
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={styles.inputContainer}>
            <MaterialIcons name='email' size={24} color='white' style={{ marginLeft: 8 }} />
            <TextInput
              style={styles.input}
              placeholder='Enter your email'
              placeholderTextColor={'white'}
              value={email}
              onChangeText={(txt) => setEmail(txt)}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name='key' size={24} color='white' style={{ marginLeft: 8 }} />
            <TextInput
              style={styles.input}
              placeholder='Enter your password'
              placeholderTextColor={'white'}
              value={password}
              onChangeText={(txt) => setPassword(txt)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
          }}
        >
          <Text style={{ fontSize: 14 }}>Keep me logged in</Text>
          <Text style={{ fontSize: 14, color: '#007FFF' }}>Forgot password</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Link href='/(authenticate)/register' style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 14, color: '#007FFF' }}>Don't have account? Sign Up</Text>
          </Link>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#FFC0C8',
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 20,
  },
  input: {
    fontSize: 18,
    padding: 4,
    color: 'white',
    marginVertical: 10,
    width: 300,
  },
  button: {
    width: '100%',
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: '#FFC0C8',
    height: 50,
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  buttonText: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' },
});
