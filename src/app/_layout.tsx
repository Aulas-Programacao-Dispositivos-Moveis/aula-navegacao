import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" 
        options={{ 
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"}
              size={24} 
              color="blue" 
            />
          ),
          headerShown: false
        }} />
      <Tabs.Screen name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? "settings" : "settings-outline"}
              size={24} 
              color="blue" 
            />
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen name="ajuda"
        options={{
          title: "Ajuda",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? "help-circle" : "help-circle-outline"}
              size={24} 
              color="blue" 
            />
          ),
          headerShown: false
        }}
      />
    </Tabs>
  );
}
