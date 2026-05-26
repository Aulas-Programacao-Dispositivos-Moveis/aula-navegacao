import { Stack } from "expo-router";

export default function RootLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ title: "Gerência" }} />
            <Stack.Screen name="diretoria" options={{ title: "Diretoria" }} />
        </Stack>
    );
}