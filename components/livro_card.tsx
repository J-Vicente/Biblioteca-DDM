import { View, Text } from "react-native";

interface CardLivroProps{
    titulo? : string;
    autor? : string;
    categoria? : string;

}


const CardLivro = (props: CardLivroProps) => {
    return(
        <View>  
            <Text>{props.titulo}</Text>
            <Text>{props.autor}</Text>
            <Text>{props.categoria}</Text>
        </View>
    );
}  

export default CardLivro;