import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();

  function navigateToTabs(){
    router.push('/(tabs)');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >📚 Livraria Digital</Text>
      <Text style={styles.subtitulo}>Descubra seu proximo livro favorito</Text>

      <TouchableOpacity style={styles.botao} onPress={navigateToTabs}>
        <Text style={styles.textBotao}> Explorar Livros</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
  },
  titulo:{
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: 32,
    marginTop: 70,
    marginBottom: 40, 
  },
  subtitulo:{
    fontWeight: 500,
    fontSize: 20,
    color: '#525252',
    marginBottom: 40,
  },
  botao:{
    backgroundColor: '#1E6BB8',
    padding: 15,
    borderRadius: 10,
  },
  textBotao:{
    color: 'white',
  },

});