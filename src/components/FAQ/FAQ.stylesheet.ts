import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(30, 31, 37)',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    paddingBottom: 50,
  },
  title:{
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item:{
    height: 50,
    overflow: 'hidden',
    marginBottom: 20
  },
  itemActive:{
    height: 'auto',
    overflow: 'hidden',
    marginBottom: 20
  },
  answer:{
    
  },
  answerText:{
    color: '#ffffff',
    fontWeight: 'normal',
    fontSize: 16,
  },
  question:{
    height: 50
  },
  questionTextOpen:{
    color: '#e24412',
    fontWeight: '600',
    fontSize: 17,
  },
  questionTextClose:{
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 17,
  },
});
