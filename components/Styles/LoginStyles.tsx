import { StyleSheet } from 'react-native'

export const LoginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: 50,
      color: '#8EC064',
      marginBottom: 40,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#F8A13A',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
    },
    inputText: {
      height: 50,
      color: 'white',
    },
    forgot: {
      color: 'white',
      fontSize: 11,
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#8EC064',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    loginText: {
      color: 'white',
    },
  })