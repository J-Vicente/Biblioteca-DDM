import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
    const router = useRouter();

    const books = [
    {
        id: 1,
        title: "O Senhor dos Anéis",
        author: "J.R.R. Tolkien",
        category: "Fantasia",
        year: 1954,
        description: "Uma épica jornada pela Terra Média."
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        category: "Ficção",
        year: 1949,
        description: "Um clássico sobre vigilância e controle."
    },
    {
        id: 3,
        title: "Dom Casmurro",
        author: "Machado de Assis",
        category: "Romance",
        year: 1899,
        description: "A história de amor de Bentinho e Capitu."
    },
    {
        id: 4,
        title: "Sapiens",
        author: "Yuval Harari",
        category: "História",
        year: 2011,
        description: "A história da humanidade em 300 páginas."
    }
    ];

    
}