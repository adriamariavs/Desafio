import { Image } from "react-native";
import { styles } from "../style/Styles";

export default function ImageComponent() {
  return <Image style={styles.img} source={require("../assets/logo.png")} />;
}
