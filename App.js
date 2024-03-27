import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import { styles } from "./src/style/Styles";
//components
import ImageComponent from "./src/componentes/ImageComponents";
import Modalll from "./src/componentes/Modal";
import TextInputs from "./src/componentes/TextInputs";

export default function App() {
  // Definição dos valores dos numeros
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const botcaucular = "Calcular";

  // Funcionamento de Visibilidade usando o useState
  const [visible, setVisible] = useState(false);

  // Definição do tipo de Gasolina para usar no Modal
  const [combustivel, setCombustivel] = useState("");

  visModal = (x) => {
    if (!visible) {
      setVisible(x);
    } else {
      setVisible(x);
    }
  };

  // Função englobando para funcionamento do botão
  const handlePress = () => {
    visModal(true);
    const resultado = num1 / num2;
    const combustivel = resultado < 0.7 ? "Álcool" : "Gasolina";
    const compensa = "Compensa usar " + combustivel;

    setCombustivel(compensa);
  };

  return (
    <View style={styles.container}>
      <View style={styles.SecondaryContainer}>
        <ImageComponent />
        <Text style={styles.text}>Qual a melhor opção?</Text>
        <View style={styles.containerinputs}>
          <TextInputs />
          <TouchableOpacity
            style={styles.botcaucular}
            onPress={() => handlePress()}
          >
            <Text style={styles.textobot}>{botcaucular}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modalll />
    </View>
  );
}
