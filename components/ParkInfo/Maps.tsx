import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import ImageViewer from 'react-native-image-zoom-viewer'
import { MapImagesSwitch } from './Utilities'
import { DescriptionStyles as styles } from '../Styles'
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
    return <Text style={styles.ParkHeading}>Maps of {parkName}</Text>
  }
export const ParkMaps: React.FC<{ navigation }> = ({ navigation }) => {
    const park = store.getState()
    const [visible, setVisible] = useState(true)
    return <>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
            margin: 20
          }}
        >
          <ToggleDrawer />
          <Heading parkName={park.name} />
        </View>
        <Modal visible={visible} presentationStyle="pageSheet">
            <ImageViewer saveToLocalByLongPress
            enableImageZoom={true}
            onSwipeDown={() => navigation.navigate('Menu Screen')}
            enablePreload={true}
            enableSwipeDown
            show
            index={0}
            imageUrls={MapImagesSwitch(park.parkCode)}/>
        </Modal>
    </>
}