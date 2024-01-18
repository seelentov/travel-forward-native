import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(30, 31, 37)',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    paddingBottom: 50,
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  desc: {
    color: '#ffffff',
    fontWeight: 'normal',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#e24412",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 15,
    width: '100%'
  },
  buttonText: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center'
  }
});
