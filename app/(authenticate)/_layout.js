import { Stack } from 'expo-router';

const AuthStack = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' />
      <Stack.Screen name='register' />
    </Stack>
  );
};

export default AuthStack;
