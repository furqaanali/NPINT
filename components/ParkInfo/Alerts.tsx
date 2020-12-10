import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { AlertDataType } from '../../api/types'
import { AlertStyles as styles } from '../Styles'
import { FetchParkAlerts } from './Utilities'
import { ParkData } from '../../api/types'
import store from '../state/store'

export const ToggleDrawer = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Menu Screen')}>
      <View>
        <Icon name='home' size={30} color='#8EC064' />
      </View>
    </TouchableOpacity>
  )
}

const AlertContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}


export const ParkAlerts = () => {
  const [response, setResponse] = useState([] as AlertDataType[])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const code = store.getState().parkCode;
    FetchParkAlerts(code).then((resp) => {
      setResponse(resp.data)
      setLoading(false)
    })
    
  }, [])
  if(isLoading){
    return <Text>Loading...</Text>
  }
  return (
    <AlertContainer>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
          margin: 20
        }}
      >
        <ToggleDrawer />
        <Text style={styles.Heading}>Alerts:</Text>
        </View>
      <ScrollView style={{
                  flexDirection: 'column',
                  
                }}>
        {response.map((alert) => {
          return (
              <Card containerStyle={styles.sectionCard} key={alert.id}>
                <Text style={styles.sectionHeading}>{alert.title}</Text>
                <Text style={styles.sectionText}>{alert.description}</Text>
              </Card>
        )})}
      </ScrollView>
    </AlertContainer>
  )
}
