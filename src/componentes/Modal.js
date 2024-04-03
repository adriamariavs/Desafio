import { View, Text, Modal, TouchableOpacity } from "react-native";
import ImageComponent from "./ImageComponents";
import { styles } from "../style/Styles";
import React, { useState } from "react";

export default function Modalll({
  vis,
  alcool,
  gasolina,
  combustivel,
  funcVisModal,
}) {
  return (
    <Modal transparent={true} animationType="fade" visible={vis}>
      <View style={styles.SecondaryContainer2}>
        <ImageComponent imgsource={require("../assets/gas.png")} />
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
        <Text style={styles.textoprecos}>Álcool: R$ {alcool}</Text>
        <Text style={styles.textoprecos}>Gasolina: R$ {gasolina}</Text>
        <TouchableOpacity
          onPress={() => funcVisModal(false)}
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
