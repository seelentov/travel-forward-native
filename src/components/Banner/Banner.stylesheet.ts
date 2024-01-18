import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 300
  },
  item: {
    height: 300,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    backgroundColor: '#00000075',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35,
    color: 'white'
  },
  desc: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 21,
    color: 'white'
  },
  background: {
    height: '100%'
  },
  button:{
    backgroundColor: "#e24412",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 20,
    width: 200
  },
  buttonText:{
    fontSize: 15,
    textTransform: 'uppercase',
    color: 'white'
  }
});
