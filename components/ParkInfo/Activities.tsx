import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { ParkData } from '../../api/types'
import { FeaturesStyles as styles } from '../Styles'
import { FetchParkData } from './Utilities'
import store from '../state/store'


const Item = ({ name }) => <Text style={styles.item}>{name}</Text>

const renderItem = ({ item }) => <Item name={item.name} />

// Creates a container to give Activities component correct borders
const ActivitiesContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

// Toggles main menu view, enables home button functionality
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

// Defines heading style
export const Heading: React.FC<{ title: string }> = ({ title }) => {
  return <Text style={styles.Heading}>{title}</Text>
}

// Returns the main component of the application that renders a list of park activities
const ParkActivities = ({ navigation }) => {
  const park: ParkData = store.getState()
  if (park.activities === undefined) {
    console.log('No Park Specified')
  }
  else {
    console.log(JSON.stringify(park.activities))
  }

  return (
    <ActivitiesContainer>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}
      >
        <ToggleDrawer />
        <Heading title={'Activities'} />
      </View>
      <FlatList
        data={park.activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ActivitiesContainer>
  )
}
export default ParkActivities
