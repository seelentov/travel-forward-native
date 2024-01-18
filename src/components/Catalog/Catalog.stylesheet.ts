import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    paddingBottom: 50
  },
  list:{
    height: 350,
  },
  item: {
    height: 300,
    borderRadius: 30,
    overflow: 'hidden',
  },
  itemTitle:{
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
    paddingLeft: 25
  },
  itemBackground:{
    width: '100%',
    height: '100%',
  },
  itemButton:{
    padding: 25
  },
  buttonText:{
    color: '#e24412',
    fontWeight: '600',
    fontSize: 16,
  },
  title:{
    color: '#000000',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  desc:{
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 16,
    marginBottom: 20,
  },
  content:{
    width: '100%',
    height: '100%',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#00000075',
  }
});
