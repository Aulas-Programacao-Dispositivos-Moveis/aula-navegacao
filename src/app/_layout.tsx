import { Drawer } from "expo-router/drawer"

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="aluno" options={{ title: "Aluno" }} />
      <Drawer.Screen name="professor" options={{ title: "Professor" }} />
      <Drawer.Screen name="(user)" options={{ title: "Usuários"}} />
      <Drawer.Screen name="(gerencia)" options={{ title: "Gerência", drawerItemStyle: {display: "none"} }} />
    </Drawer>
  );
}
