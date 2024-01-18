import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(30, 31, 37)',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    paddingBottom: 50
  },
  item:{
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10
  },
  icon:{
    width: 60,
    height: 60
  },
  text:{

  },
  title:{
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 10
  },
  mainTitle:{
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30
  },
  desc:{
    fontSize: 12,
    color: "rgb(135, 135, 135)",
  }
});
