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
  title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  blockText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },
  block: {
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15
  },
  blockSocial:{
    marginTop: 30
  }
});
