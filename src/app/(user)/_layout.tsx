import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ title: "Usuário" }} />
            <Tabs.Screen name="admin" options={{ title: "Administrador" }}/>
        </Tabs>
    );
}