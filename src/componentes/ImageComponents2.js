import { Image } from "react-native";
import { styles } from "../style/Styles";

export default function ImageComponent2() {
  return (
    <Image
      style={[styles.img, { marginBottom: 50 }]}
      source={require("../assets/gas.png")}
    />
  );
}
