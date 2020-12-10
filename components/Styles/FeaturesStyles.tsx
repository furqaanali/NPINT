import { StyleSheet } from 'react-native'

export const FeaturesStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF' },
    title: {
      color: '#8EC064',
      fontWeight: 'bold',
      fontSize: 36,
      marginBottom: 5,
      marginTop: 15,
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
      marginTop: 15,
      marginBottom: 5,
    },
    item: {
      padding: 20,
      marginVertical: 20,
      marginHorizontal: 200,
      flex: 1,
      fontWeight: 'bold',
      
      alignSelf: 'center',
      textAlign: 'center',
      color: '#9E6D4A',
      width: '40%',
      fontSize: 14,
      backgroundColor: '#8EC064',
      marginBottom: 20,
      borderRadius: 25,
      shadowRadius: 25,
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
  })