import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { paddingBottom: 4 },
      }}
    >
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ size, color }) => {
            return <Feather name='eye' size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name='chat'
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name='chatbubbles' size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name='bio'
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ size, color }) => {
            return <MaterialIcons name='account-circle' size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
