import { StyleSheet } from 'react-native'

export const AccountStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
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
      color: 'black',
      marginBottom: 40,
    },
    Heading: {
      flex: 1,
      color: '#8EC064',
      alignItems: 'flex-start',
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 36,
      marginBottom: 5,
      marginTop: 15,
    },
    descriptionText: {
      flex: 1,
      fontWeight: 'bold',
      alignSelf: 'center',
      textAlign: 'center',
      color: '#8EC064',
      width: '80%',
      fontSize: 20,
      marginTop: 200,
    },
  })