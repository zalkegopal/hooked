import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import axios from 'axios';

const singup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    const user = {
      name,
      email,
      password,
    };
    if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters alphanumeric string.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Password and Confirm password dont match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/auth/signup', user);
      if (res.status == 200) {
        Alert.success('Successfully signed up!');
        router.replace('/login');
      }
    } catch (error) {
      console.log('Error in signup', error);
      Alert.error('Error while registering: ', error.message);
    }
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
            Create your account
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={styles.inputContainer}>
            <MaterialIcons name='person' size={24} color='white' style={{ marginLeft: 8 }} />
            <TextInput
              style={styles.input}
              placeholder='Enter your name'
              placeholderTextColor={'white'}
              value={name}
              onChangeText={(txt) => setName(txt)}
            />
          </View>
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
          <View style={styles.inputContainer}>
            <MaterialIcons name='key' size={24} color='white' style={{ marginLeft: 8 }} />
            <TextInput
              style={styles.input}
              placeholder='Confirm your password'
              placeholderTextColor={'white'}
              value={confirmPassword}
              onChangeText={(txt) => setConfirmPassword(txt)}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Link href='/(authenticate)/login' style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 14, color: '#007FFF' }}>Already have an account? Login</Text>
          </Link>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default singup;

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
