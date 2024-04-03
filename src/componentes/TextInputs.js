import { Text, View, TextInput } from "react-native";
import { styles } from "../style/Styles";
import React, { useState } from "react";

export default function TextInputs({ setGas, setAlc, alcool, gasolina }) {
  // TEXTOS
  const textoalcool = "Álcool (preço por litro):";
  const textogasolina = "Gasolina (preço por litro):";

  return (
    <View>
      <Text style={styles.textoinputs}>{textoalcool}</Text>
      <TextInput
        style={styles.inputs1}
        keyboardType="numeric"
        onChangeText={setAlc}
        value={alcool}
      />

      <Text style={styles.textoinputs}>{textogasolina}</Text>
      <TextInput
        style={styles.inputs1}
        keyboardType="numeric"
        onChangeText={setGas}
        value={gasolina}
      />
    </View>
  );
}
