import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import CardLivro from '../../components/livro_card';

export default function TabIndex() {
    const router = useRouter();


    function NavigateToBook(){
        router.push('/books/[id]');
    }


    return(
        <View>
            <View>
                <TouchableOpacity onPress={NavigateToBook}>
                 {<CardLivro titulo={books[0].title} autor={books[0].author} categoria={books[0].category} />}
                </TouchableOpacity>

                <TouchableOpacity onPress={NavigateToBook}>
                    {<CardLivro titulo={books[1].title} autor={books[1].author} categoria={books[1].category} />}
                </TouchableOpacity>

            </View>

            <View>
                <TouchableOpacity onPress={NavigateToBook}>
                    {<CardLivro titulo={books[2].title} autor={books[2].author} categoria={books[2].category} />}
                </TouchableOpacity>
                
                <TouchableOpacity onPress={NavigateToBook}>
                    {<CardLivro titulo={books[3].title} autor={books[3].author} categoria={books[3].category} />}
                </TouchableOpacity>
            </View>
        </View>
    );

}

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