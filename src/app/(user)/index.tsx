import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function User() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Usuário</Text>
            <Link href="/(gerencia)">
                <Text>Acessar página da Gerência</Text>
            </Link>
        </View>
    );
}