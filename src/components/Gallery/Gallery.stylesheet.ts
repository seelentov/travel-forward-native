import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
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
    height: 200,
  },
  image: {
    height: 150,
    borderRadius: 30,
  },
});
