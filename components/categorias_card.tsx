import { View, Text, StyleSheet} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface CardCategoriaProps{
    nome? : string;
    quantidade? : number;
    cor? : string;
}


const CardCategoria = (props: CardCategoriaProps) => {
    return(
        <View style={{backgroundColor:props.cor}}>  
            <Text>{props.nome}</Text>
            <Text>{props.quantidade}</Text>
        </View>
    );
}  

export default CardCategoria;

