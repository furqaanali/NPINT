import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TourStyles as styles } from '../Styles'
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

const TourContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

export const Heading: React.FC<{ title: string }> = ({ title }) => {
  return <Text style={styles.descriptionText}>{title}</Text>
}

const TourGuides = ({ navigation }) => {
  return (
    <TourContainer>
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
            'Will display when tour guides are giving out tours, as well as some info on local guides '
          }
        />
      </View>
    </TourContainer>
  )
}
export default TourGuides
