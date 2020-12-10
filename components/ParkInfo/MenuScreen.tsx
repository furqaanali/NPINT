import { useNavigation } from '@react-navigation/native'
import React, { useState, Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import store from '../state/store'
import { ParkData } from '../../api/types'
import { MenuStyles as styles } from '../Styles'

const DATA = [
  {
    id: '0',
    title: 'Park Selection',
    loc: 'Park Selection',
  },
  {
    id: '1',
    title: 'Park Description',
    loc: 'Park Description',
  },
  {
    id: '2',
    title: 'Park History',
    loc: 'Park History',
  },
  {
    id: '3',
    title: 'Park Maps',
    loc: 'Park Maps',
  },
  {
    id: '4',
    title: 'Park Activities',
    loc: 'Park Activities',
  },
  {
    id: '5',
    title: 'Park Alerts',
    loc: 'Park Alerts',
  },
  {
    id: '7',
    title: 'Real-Time Weather',
    loc: 'Weather Forecast',
  },

]


const resizeMode = 'center';

export const ParkName: React.FC<{ name: string }> = ({ name }) => {
  return <Text style={styles.ParkHeading}>{name}</Text>
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

const MenuContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const MenuScreen = ({ navigation }) => {
  const park: ParkData = store.getState()
  //const remote = 'https://www.nps.gov/common/uploads/structured_data/3C7B477B-1DD8-B71B-0BCB48E009241BAA.jpg';
  const remote = park.images[0].url
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.myItem}
      onPress={() => {
        
        navigation.push(item.loc)
      }}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )
  return (
    <MenuContainer>
      <View style={styles.cropped}>
        <ImageBackground
          style={styles.image}
          source={{ uri: remote }}
        >
          <Text style={styles.ParkHeading}>{park.fullName}</Text>
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 200,
          padding: 20,
        }}
      >
      <ToggleDrawer />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
        
      />
    </MenuContainer>
  )
}
export default MenuScreen
