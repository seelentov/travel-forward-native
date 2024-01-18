import { StyleSheet, View } from 'react-native';


export default function Dot() {
  return (
    <View style={styles.main}>

    </View>
  );
}


export const styles = StyleSheet.create({
  main: { 
    backgroundColor: '#000000', 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3, 
  },
});
