import { useLocalSearchParams } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";


export default function Index() {
  function ShowAlert(mensagem: string){
    alert(mensagem);
  }

  const router = useRouter();

  const { id } = useLocalSearchParams();
  const book = books.find(b => b.id === Number(id));

  if (!book) {
    return <Text>Livro não encontrado.</Text>;
  }

  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Text>{book.category}</Text>
      <Text>{book.year}</Text>
      <Text>{book.description}</Text>
      <TouchableOpacity onPress={() => ShowAlert('Livro adicionado!')}>Adicionar a lista</TouchableOpacity>
      <TouchableOpacity onPress={() => ShowAlert('Link copiado!')}>Compartilhar</TouchableOpacity>
      <TouchableOpacity onPress={() =>  router.back()}>Voltar</TouchableOpacity>

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