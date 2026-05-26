import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Diretoria() {
    return (
        <View>
            <Text>Diretoria</Text>
            <Link href="/professor">
                <Text>Acessar página da Professor</Text>
            </Link>
        </View>
    );
}