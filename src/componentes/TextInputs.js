import { Text, View, TextInput } from "react-native";
import { styles } from "../style/Styles";
import React, { useState } from "react";

export default function TextInputs() {
  // TEXTOS
  const textoalcool = "Álcool (preço por litro):";
  const textogasolina = "Gasolina (preço por litro):";

  // Definição dos valores dos numeros
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  return (
    <View>
      <Text style={styles.textoinputs}>{textoalcool}</Text>
      <TextInput
        style={styles.inputs1}
        keyboardType="numeric"
        onChangeText={setNum1}
        value={num1}
      />

      <Text style={styles.textoinputs}>{textogasolina}</Text>
      <TextInput
        style={styles.inputs1}
        keyboardType="numeric"
        onChangeText={setNum2}
        value={num2}
      />
    </View>
  );
}
