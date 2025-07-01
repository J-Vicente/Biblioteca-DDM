import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {

  function ShowAlert(mensagem: string){
    alert(mensagem);
  }

  return (
    <View>
      <Text>Nome: "Jeferson queiroga"</Text>
      <Text>mail: "jeferson@livraria.com"</Text>
      <Text>Estatísticas:</Text>
      <Text>Livros lidos: 23</Text>
      <Text>Categoria favorita: "Romance"</Text>
      <Text>Livros na lista: 5</Text>

      <TouchableOpacity onPress={() => ShowAlert('Função em desenvolvimento')}>
        <Text>Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );

}