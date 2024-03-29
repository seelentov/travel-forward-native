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
  buttonMain: {
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    color: '#e24412',
    textAlign: 'left'
  },
  buttonCloseView:{
    width: '100%',
    marginBottom: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
  input:{
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20
  }
});
