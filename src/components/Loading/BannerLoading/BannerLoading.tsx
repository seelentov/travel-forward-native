import { ActivityIndicator, View } from "react-native";
import { styles } from './Loading.stylesheet';
export default function Loading() {

  return (
    <View
      style={styles.main}
    >
      <ActivityIndicator color={"#e24412"} size={80} />
    </View>
  );
}