import { View, Text, Modal, TouchableOpacity } from "react-native";
import ImageComponent2 from "./ImageComponents2";
import { styles } from "../style/Styles";
import React, { useState } from "react";

export default function Modalll() {
  visModal = (x) => {
    if (!visible) {
      setVisible(x);
    } else {
      setVisible(x);
    }
  };

  // Funcionamento de Visibilidade usando o useState
  const [visible, setVisible] = useState(false);

  // Definição do tipo de Gasolina para usar no Modal
  const [combustivel, setCombustivel] = useState("");

  // Definição dos valores dos numeros
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const botcaucular = "Calcular";

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.SecondaryContainer2}>
        <ImageComponent2 />
        <Text style={styles.textfrase}>{combustivel}</Text>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 15,
          }}
        >
          Com os preços:
        </Text>
        <Text style={styles.textoprecos}>Álcool: R$ {num1}</Text>
        <Text style={styles.textoprecos}>Gasolina: R$ {num2}</Text>
        <TouchableOpacity
          onPress={() => visModal(false)}
          style={{
            width: "65%",
            height: "12%",
            borderColor: "red",
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "red",
              textAlign: "center",
            }}
          >
            Calcular novamente
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
