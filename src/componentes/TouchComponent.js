import { styles } from "../style/Styles";
import { Text, TouchableOpacity } from "react-native";

export default function TouchComponent({ handPress }) {
  const botcaucular = "Calcular";

  return (
    <TouchableOpacity style={styles.botcaucular} onPress={handPress}>
      <Text style={styles.textobot}>{botcaucular}</Text>
    </TouchableOpacity>
  );
}
