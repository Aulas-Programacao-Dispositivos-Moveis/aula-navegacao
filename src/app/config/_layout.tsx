import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="app"
                options={{
                    title: "Aplicativos",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "apps" : "apps-outline"}
                            size={24}
                            color="blue"
                        />
                    ),
                }}
            />
            <Tabs.Screen name="bluetooth"
                options={{
                    title: "Bluetooth",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "bluetooth-sharp" : "bluetooth-outline"}
                            size={24}
                            color="blue"
                        />
                    ),
                }}
            />
        </Tabs>
    );
}