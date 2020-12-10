import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useMemo, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { ParkData } from '../../api/types'
import { SelectionStyles as styles } from '../Styles'
import { FetchAllParks, FetchParkData, Log, LogEnum } from './Utilities'
import { parkReducer } from '../state/reducer'
import { CHANGE_PARK } from '../state/actions'
import {useDispatch} from 'react-redux'
import store from '../state/store'
const { Info } = LogEnum

const MenuContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

/**
 * This component is now the home of our National Parks API request.
 *
 * I had to hoist it from the ParkDirections component because
 * we need to set the title of each button in the list.
 * The only way to get the title is the request sooo yeah.
 *
 * - Paul
 */
const ParkButtonList: React.FC = ({}) => {
  const [ParkList, setParkList] = useState([] as ParkData[])
  const [doneLoading, setLoading] = useState(false)
  
  useEffect(() => {
    FetchAllParks().then((res) => {
      setParkList(res)
      Log(Info, `ParkList initiallized as ${JSON.stringify(ParkList)}`)
      setLoading(true)
    })
  }, [])
  //const dispatch = useDispatch()
  const navigation = useNavigation()
  if (!doneLoading) {
    return <Text>Loading...</Text>
  } else {
    Log(Info, `ParkList length: ${ParkList.length}`)
    return (
      <>
        <ScrollView style={styles.loginList}>
          {ParkList?.map((p, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  
                }}
              >
                <TouchableOpacity
                  key={index}
                  style={{flex: 1,
                    width: '100%',
                    
                   
                    height: 50,
                    
                    justifyContent: 'center',
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    alignItems: 'center',
                    
                    }}
                  onPress={() => {
                   
                    store.subscribe(() => console.log(`Subscribed. Park: ${store.getState().parkCode}`))
                   store.dispatch({type: CHANGE_PARK, payload: {...p}})
                    Log(Info, 'Button Pressed')
                    //navigation.setParams({park: p})
                    navigation.navigate('Park Description', {
                      park: p,
                    })
                  }}
                >
                  <Text>{p.fullName == 'Haleakal&#257; National Park' ? 'Haleakalā National Park' : p.fullName}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </>
    )
  }
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

const Menu = ({ navigation }) => {
  //Log(Info, `Menu Navigation: ${JSON.stringify(navigation)}`)
  // Simulate first park being pressed
  console.log(`Subscribed. Park: ${store.getState().parkCode}`)
  return (
    <MenuContainer>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}
      >
        <ToggleDrawer />
        <Heading title={'Select a National Park'} />
      </View>

      <ParkButtonList />
    </MenuContainer>
  )
}
export default Menu
