import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(251, 251, 251)',
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
    color: '#000000',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  desc: {
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 16,
    marginBottom: 20,
  },
  list: {
    height: 270,
  },
  image: {
    height: 150,
    borderRadius: 30,
  },
  item: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 15,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    marginBottom: 30
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
  },
  bottom: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    width: '100%',
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  userName: {
    fontWeight: '700'
  },
  rating: {
    display: 'flex',
    gap: 5,
    flexDirection: "row"
  },
  date: {
    color: 'rgb(100, 100, 100)',
    fontSize: 12
  },
  itemButton: {
  },
  itemButtonText: {
    color: '#e24412',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonMain: {
    backgroundColor: "#e24412",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 15,
    width: '100%'
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
  modalViewReview: {
    backgroundColor: 'white',
    borderRadius: 20,
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
    maxHeight: 500
  },
  buttonCloseViewReview: {
    width: '100%',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    color: '#e24412',
    textAlign: 'left'
  },
  buttonCloseView: {
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
  input: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20
  },
  textarea: {
    textAlignVertical: 'top',
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16
  }
});
