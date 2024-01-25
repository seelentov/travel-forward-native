import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    overflow: 'visible'
  },
  menu: {
    position: 'absolute',
    top: 90,
    left: 0,
    backgroundColor: 'rgb(30, 31, 37)',
    width: '100%',
    height: '100%',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    padding: 20
  },
  menuClose: {
    position: 'absolute',
    top: 80,
    left: '-100%',
    backgroundColor: 'rgb(30, 31, 37)',
    width: '100%',
    height: '100%',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 20
  },
  menuItem: {
    paddingTop: 10,
    paddingBottom: 10
  },
  menuItemActive: {

  },
  menuItemText: {
    color: 'white',
    fontSize: 20
  },
  call: {
    height: 43,
    width: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: "#e24412",
  },
  burderButton: {
    height: 43,
    width: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    borderRadius: 15,
    backgroundColor: "#e24412",
  },
  burderButtonLine: {
    width: '50%',
    height: 3,
    backgroundColor: "white",
  },
  hr: {
    width: '100%',
    backgroundColor: '#2c2d36',
    height: 1
  }
});
