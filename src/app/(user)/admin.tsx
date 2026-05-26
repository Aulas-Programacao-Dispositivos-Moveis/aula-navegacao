import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Admin() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Admin</Text>
            <Link href="/(gerencia)/diretoria">
                <Text>Acessar página da Diretoria</Text>
            </Link>
        </View>
    );
}