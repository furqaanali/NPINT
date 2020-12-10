import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { InfoStyles as styles } from '../Styles'
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

const MoreInfoContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

export const Heading: React.FC<{ title: string }> = ({ title }) => {
  return <Text style={styles.descriptionText}>{title}</Text>
}

const MoreInfo = ({ navigation }) => {
  return (
    <MoreInfoContainer>
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
            'Will show any additional information we see fit to include'
          }
        />
      </View>
    </MoreInfoContainer>
  )
}
export default MoreInfo
