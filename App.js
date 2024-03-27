import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

export default function App() {
  // TEXTOS
  const textoalcool = "Álcool (preço por litro):";
  const textogasolina = "Gasolina (preço por litro):";
  const botcaucular = "Calcular";

  
  // // Mensagens do Modal
  // const precoalcool = "Álcool: R$ "+ num1;
  // const precogas = "Gasolina: R$ "+ num2;

  // Definição dos valores dos numeros
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");


  // Funcionamento de Visibilidade usando o useState
  const [visible, setVisible] = useState(false);

  // Definição do tipo de Gasolina para usar no Modal
  const [combustivel, setCombustivel] = useState('');

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
        <Image style={styles.img} source={require("./src/assets/logo.png")} />
        <Text style={styles.text}>Qual a melhor opção?</Text>
        <View style={styles.containerinputs}>
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
          <TouchableOpacity
            style={styles.botcaucular}
            onPress={() => handlePress()}
          >
            <Text style={styles.textobot}>{botcaucular}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="fade" visible={visible}>
        <View style={styles.SecondaryContainer2}>
          <Image style={[styles.img,{marginBottom: 50}]} source={require("./src/assets/gas.png")} />
          <Text style={styles.textfrase}>{combustivel}</Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginBottom: 15}}>Com os preços:</Text>
          <Text style={styles.textoprecos}>Álcool: R$ {num1}</Text>
          <Text style={styles.textoprecos}>Gasolina: R$ {num2}</Text>
          <TouchableOpacity onPress={() => visModal(false)} style={{width: '65%', height: '12%', borderColor: 'red', borderWidth: 1, borderRadius: 5, justifyContent: 'center', marginTop: 15}} >
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'red', textAlign: 'center'}}>Calcular novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  SecondaryContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center'
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginTop: 15,
  },
  inputs1: {
    width: "90%",
    height: "13%",
    backgroundColor: "white",
    borderRadius: 5,
    alignSelf: "center",
    margin: 5,
    fontSize: 20,
  },
  containerinputs: {
    width: "100%",
    height: 300,
    marginTop: 75,
  },
  textoinputs: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 30,
    marginTop: 15,
    fontWeight: "bold",
  },
  botcaucular: {
    width: "90%",
    height: "15%",
    backgroundColor: "red",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 5,
  },
  textobot: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  SecondaryContainer2: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
  },
  textfrase: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30, 
    marginTop: 15
  },
  textoprecos: {
    color: 'white',
    fontSize: 20,
  }
});
