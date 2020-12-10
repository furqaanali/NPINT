import { StyleSheet } from 'react-native'

export const MenuStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      myItem: {
        flex: 1,
        width: '45%',
        backgroundColor: '#8EC064',
        borderRadius: 25,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 1,
        marginRight: 1,
        borderWidth: 1,
        borderColor: 'black'
      },
      ParkHeading: {
        flex: 1,
        color: '#8EC064',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 36,
        marginBottom: 0,
        marginTop: 100,
        textShadowColor: 'black',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
      },
      image: {
        marginLeft: 0,
        marginTop: 0,
        width: '100%',
        height: '100%',
      },
      cropped: {
        width: '100%',
        height: '30%',
        overflow: 'hidden',
        position: 'absolute',
        left: 0,
        top: 0,
      },
    
  })