import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout(){
    <Tabs screenOptions={{ tabBarActiveTintColor:'blue' }}>
        <Tabs.Screen 
            name = "index"
            options={{
                title: 'Livros',
                tabBarIcon: ({ color, size}) => (
                    <Ionicons name='book' size={size} color={color}/>
                ),
            }}
        />

        <Tabs.Screen 
            name = "categories"
            options={{
                title: 'Categorias',
                tabBarIcon: ({ color, size}) => (
                    <Ionicons name='list' size={size} color={color}/>
                ),
            }}
        />

        <Tabs.Screen 
            name = "profile"
            options={{
                title: 'Perfil',
                tabBarIcon: ({ color, size}) => (
                    <Ionicons name='person' size={size} color={color}/>
                ),
            }}
        />
        
    </Tabs>


}