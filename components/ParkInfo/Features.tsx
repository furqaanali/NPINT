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

const FeaturesContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

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

export const Heading: React.FC<{ title: string }> = ({ title }) => {
  return <Text style={styles.Heading}>{title}</Text>
}

const ParkFeatures = ({ navigation }) => {
  const park: ParkData = store.getState()
  //console.log(park)

  return (
    <FeaturesContainer>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}
      >
        <ToggleDrawer />
        <Heading title={'Features'} />
      </View>
      <FlatList
        data={park.activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </FeaturesContainer>
  )
}
export default ParkFeatures
