import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import CardCategoria from '../../components/categorias_card';

export default function Index() {

  function ShowAlert(mensagem: string){
    alert(mensagem);
  }

  return (
    <View>
      <TouchableOpacity onPress={() => ShowAlert(mensages[0])}>
        <CardCategoria  nome={categories[0].name}  
        quantidade={categories[0].count} 
        cor={categories[0].color}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => ShowAlert(mensages[1])}>
        <CardCategoria  nome={categories[1].name}  
        quantidade={categories[1].count} 
        cor={categories[1].color}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => ShowAlert(mensages[2])}>
        <CardCategoria  nome={categories[2].name}  
        quantidade={categories[2].count} 
        cor={categories[2].color}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => ShowAlert(mensages[3])}>
        <CardCategoria  nome={categories[3].name}  
        quantidade={categories[3].count} 
        cor={categories[3].color}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => ShowAlert(mensages[4])}>
        <CardCategoria  nome={categories[4].name}  
        quantidade={categories[4].count} 
        cor={categories[4].color}/>
      </TouchableOpacity>

    </View>
  );

}

const categories = [
  { name: "Fantasia", count: 12, color: "#8B5CF6" },
  { name: "Ficção", count: 8, color: "#EF4444" },
  { name: "Romance", count: 15, color: "#F59E0B" },
  { name: "História", count: 6, color: "#10B981" },
  { name: "Tecnologia", count: 9, color: "#3B82F6" }
];

const mensages = categories.map(
  (c) => `Categoria ${c.name} tem ${c.count} livros`
);
