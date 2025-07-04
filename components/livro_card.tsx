import { View, Text, StyleSheet } from "react-native";

interface CardLivroProps{
    titulo? : string;
    autor? : string;
    categoria? : string;

}


const CardLivro = (props: CardLivroProps) => {
    return(
        <View style={styles.card}>  
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.text}>{props.autor}</Text>
            <Text style={styles.text}>{props.categoria}</Text>
        </View>
    );
}  

export default CardLivro;

const styles = StyleSheet.create({
  card:{
    width: 170,
    height: "100%",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    alignItems: "center",
    borderStyle:"solid",
    borderColor:"black",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 30,
    backgroundColor:"#053ADE",
    
  },
  text:{
    fontSize:15,
    color:"white",
    marginBottom:10,
  },
  titulo:{
    color:"white",
    textAlign:"center",
    width:"100%",
    fontWeight:"bold",
    marginBottom: 10,
    fontSize: 15,
  }
 
});