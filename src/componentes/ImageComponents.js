import { Image } from "react-native";
import { styles } from "../style/Styles";

export default function ImageComponent({ imgsource }) {
  return <Image style={styles.img} source={imgsource} />;
}
