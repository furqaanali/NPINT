import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { ServicesStyles as styles } from '../Styles'

const ServicesContainer: React.FC = ({ children }) => {
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
  return <Text style={styles.descriptionText}>{title}</Text>
}

const ParkServices = ({ navigation }) => {
  return (
    <ServicesContainer>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}
      >
        <ToggleDrawer />
        <Heading
          title={
            'Page under construction. ' +
            'Will allow users to reserve spots on campsites, rent travel gear or have a quick talk with a park representative.'
          }
        />
      </View>
    </ServicesContainer>
  )
}
export default ParkServices
