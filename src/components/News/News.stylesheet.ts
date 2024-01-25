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
  list: {
    height: 420,
  },
  item: {
    display: 'flex',
    gap: 15,
    marginBottom: 30
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 20
  },
  itemTitle: {
    color: '#000000',
    fontSize: 21,
    fontWeight: 'bold',
  },
  itemBottomText: {
    color: 'rgb(100, 100, 100)',
    fontSize: 12
  },
  itemBottom: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  itemBottomBlock: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  title: {
    color: '#000000',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
