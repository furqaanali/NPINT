import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { ParkData } from '../../api/types'
import store from '../state/store'
import { DescriptionStyles as styles } from '../Styles'
import { ParkAlerts } from './Alerts'
import { FetchWeatherFromLocation, Log, LogEnum } from './Utilities'
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

export const ParkDescription = ( { navigation } ) => {
  //console.log(`navigation: ${store.getState()}`)
  // This is a reaaaally shitty hack
  const park: ParkData = store.getState()
  //const { park } = routes.params
  //Log(LogEnum.Info, `Park is ${JSON.stringify(park)}`)

  if (park.description === undefined) {
    console.log('No Park Specified')
  }
  else {
    // let dataArr = [park.description, park.directionsInfo, park.weatherInfo]
    const description = JSON.stringify(park.description)
    const directions = JSON.stringify(park.directionsInfo)
    const weather = JSON.stringify(park.weatherInfo)
    const combined = description + directions + weather
    console.log(combined)
  }

  return (
    <ScrollView style={styles.container}>
      <ParkChild park={park} />
    </ScrollView>
  )
}
export default ParkDescription

export const ParkBackground: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <>
      <Text style={styles.descriptionText}>{description}</Text>
    </>
  )
}
export const ParkDirections: React.FC<{ directions: string }> = ({
  directions,
}) => {
  return (
    <Card containerStyle={styles.sectionCard}>
      <Text style={styles.sectionHeading}>Directions</Text>
      <Text style={styles.sectionText}>{directions}</Text>
    </Card>
  )
}

export const ParkHeading: React.FC<{ title: string }> = ({ title }) => {
  return <Text style={styles.ParkHeading}>{title}</Text>
}
export const ParkWeather: React.FC<{ weather: string }> = ({ weather }) => {
  return (
    <Card containerStyle={styles.sectionCard}>
      <Text style={styles.sectionHeading}>Weather</Text>
      <Text style={styles.sectionText}>{weather}</Text>
    </Card>
  )
}
export const ParkChild: React.FC<{ park: ParkData }> = ({ park }) => {
  // console.log(JSON.stringify(park.activities,null,4))
  // var city = park.addresses[1].city

  const [weather, setWeather] = useState({})
  useEffect(() => {
    FetchWeatherFromLocation(park.longitude, park.latitude).then((v) =>
      setWeather(JSON.stringify(v))
    )
    console.log(`the weather is: ${weather}`)
  }, [])


  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
          marginBottom: 20
        }}
      >
        <ToggleDrawer />
        <ParkHeading title={park.fullName} />
      </View>
      <ParkBackground description={park.description} />
      <ParkDirections directions={park.directionsInfo} />
      <ParkWeather weather={park.weatherInfo} />
    </>
  )
}
