import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useMemo, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Icon, Card } from 'react-native-elements'
import { useReducer, connect } from 'react-redux'
import { DescriptionStyles as styles } from '../Styles'
import { LiveWeather, ParkData, Temperature, WeatherConditions, Wind } from '../../api/types'
import { FetchWeatherFromLocation, Log, LogEnum } from './Utilities'
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

export const Heading: React.FC<{ parkName: string }> = ({ parkName }) => {
  return <Text style={styles.ParkHeading}>{parkName}'s Real-Time Weather</Text>
}

export const ParkTemperature: React.FC<{ temperature: Temperature }> = ({
  temperature,
}) => {
  return (
    <Card containerStyle={styles.sectionCard}>
      <Text style={styles.sectionHeading}>Temperature</Text>
      <Text style={styles.sectionText}>Current Temperature: {temperature.temp}{'\u00b0'}F</Text>
      <Text style={styles.sectionText}>Feels Like: {temperature.feels_like}{'\u00b0'}F</Text>
    </Card>
  )
}

export const ParkWeatherCondition: React.FC<{ conditions: WeatherConditions[] }> = ({
  conditions,
}) => {
  return (
    <Card containerStyle={styles.sectionCard}>
      <Text style={styles.sectionHeading}>Weather Conditions</Text>
      <Text style={styles.sectionText}>Condition Group: {conditions[0].main}</Text>
      <Text style={styles.sectionText}>Description: {conditions[0].description}</Text>
    </Card>
  )
}

export const ParkWindiness: React.FC<{ wind: Wind }> = ({
  wind,
}) => {
  return (
    <Card containerStyle={styles.sectionCard}>
      <Text style={styles.sectionHeading}>Wind</Text>
      <Text style={styles.sectionText}>Speed: {wind.speed} mph</Text>
      <Text style={styles.sectionText}>Direction: {wind.deg}{'\u00b0'}</Text>
      <Text style={styles.sectionText}>Gust: {wind.gust}</Text>
    </Card>
  )
}

export const ParkMoreWeather: React.FC<{ temperature: Temperature, visible: string }> = ({
  temperature, visible
}) => {
  return (
    <Card containerStyle={styles.sectionCard}>
      <Text style={styles.sectionHeading}>More</Text>
      <Text style={styles.sectionText}>Humidity: {temperature.humidity}%</Text>
      <Text style={styles.sectionText}>Pressure: {temperature.pressure} inHG</Text>
      <Text style={styles.sectionText}>Visibility: {visible} meters</Text>
    </Card>
  )
}

const WeatherForecast = ({ navigation }) => {
  const park = store.getState()
  connect(store)(WeatherForecastComponent)
  console.log(park.parkCode)
  return <View style={styles.container}><WeatherForecastComponent park={park}/></View>
}

const WeatherForecastComponent = ({ park }) => {
  console.log('testing2')
  const [temperatures, setTemperatures] = useState({} as Temperature)
  const [conditions, setConditions] = useState({} as WeatherConditions[])
  const [wind, setWind] = useState({} as Wind)
  const [visible, setVisible] = useState({} as string)
  const [isLoading, setLoading] = useState(true)
  Log(LogEnum.Info, `in weather, state is: ${JSON.stringify(store.getState())}`)
  console.log(`In weather, park is ${park.parkCode}`)
  useMemo(() => {
    FetchWeatherFromLocation(park.latitude, park.longitude).then((resp) => {
      if (park.latitude != null && park.longitude != null) {
        setTemperatures(resp.main)
        setConditions(resp.weather)
        setWind(resp.wind)
        setVisible(resp.visibility)
        setLoading(false)
      }
      console.log(resp)
      console.log(temperatures)
      console.log("LAT=" + park.latitude + ". LON=" + park.longitude + ".")
    })
  }, [])

  if (conditions == null || conditions == undefined) {
    return <Text>Real Time Weather Unavailable For This Location</Text>
  }
  else if (isLoading || temperatures == undefined || temperatures == null) {
    return <Text>Loading...</Text>
  }
  else {
    console.log(temperatures)
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}
        >
          <ToggleDrawer />
          <Heading parkName={park.name} />
        </View>
        <ParkTemperature temperature={temperatures} />
        <ParkWeatherCondition conditions={conditions} />
        <ParkWindiness wind={wind} />
        <ParkMoreWeather temperature={temperatures} visible={visible} />
      </ScrollView>
    )
  }
}
export default WeatherForecastComponent