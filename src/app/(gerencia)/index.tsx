import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Gerencia() {
    return (
        <View>
            <Text>Gerência</Text>
            <Link href="/aluno">
                <Text>Acessar página de Aluno</Text>
            </Link>
        </View>
    );
}