import { StyleSheet } from 'react-native'

export const SelectionStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF' }, // Squishes everything together: alignItems: 'center', justifyContent: 'center'},
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
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 50,
      color: '#8EC064',
      textAlignVertical: 'top',
      marginTop: 5,
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
      flex: 1,
      width: '80%',
      
      borderRadius: 25,
      height: 50,
      
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    loginList: {
      margin: '0%',
      height: '100%'
    },
   
    Heading: {
      flex: 1,
      color: '#8EC064',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 36,
      marginBottom: 5,
      marginTop: 15,
    },
  })