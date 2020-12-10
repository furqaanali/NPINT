import { useNavigation } from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import store from '../state/store'
import { HistoryStyles as styles } from '../Styles'
import { ParkData, Park, HistoryType, HistoryDataType } from '../../api/types'
import { FetchParkHistory} from './Utilities'
import { ScrollView } from 'react-native-gesture-handler'
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

const HistoryContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

export const Heading: React.FC<{ title: string }> = ({ title }) => {
  return <Text style={styles.descriptionText}>{title}</Text>
}



export const HistoryPage = ({ navigation }) => {
  const park = store.getState()
  console.log("begin history")
  console.log(park.fullName)
  var formattedParkNameInitial = park.fullName.replace(/&/g, 'and').replace(/Of/g, 'of').replace(/The/g, 'the').replace(/ - /g, '–').replace(/\'/g, 'ʻ').replace(/St/g, 'St.').replace(/ /g, '_')
  if(formattedParkNameInitial == 'Glacier_National_Park'){
    formattedParkNameInitial = 'Glacier_National_Park_(U.S.)'
  }
  else if(formattedParkNameInitial == 'Haleakaland#257;_National_Park'){
    formattedParkNameInitial = 'Haleakalā_National_Park'
  }
  const formattedParkName = formattedParkNameInitial
  const [response, setResponse] = useState<HistoryDataType | undefined>(undefined)
  const [isLoading, setLoading] = useState(true)
  console.log(formattedParkName)
  useEffect(() => {
    FetchParkHistory(formattedParkName).then((resp) => setResponse(resp))
    setLoading(false)
  }, [])
  const wikiPage = response?.query.pages
  const wikiPageText = response != undefined ? Object.keys(response.query.pages)[0] : undefined
  const realText = wikiPageText != undefined && wikiPage != undefined ? wikiPage[wikiPageText].extract : undefined
  
  console.log(realText)
  const startHistory = realText?.indexOf('\n== History ==\n')
  const HistoryText = realText?.substring(startHistory, realText.length)
  const endHistReg = new RegExp('\n===? (Climate|Ecology|See|Attractions|Recent|Geograph|Recreational|Geology|Biology|Tourist|Activities|Trails|Wildlife|Gallery|Visitor)')
  const endHistory = HistoryText?.search(endHistReg)
  const HistoryFinal = HistoryText?.substring(0, endHistory)
  if (HistoryFinal == null){
    return (
      <HistoryContainer>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
            marginBottom: 20
          }}
        >
          <ToggleDrawer />
  
  
          
          <Text adjustsFontSizeToFit
          style={styles.Heading}>
            History of {park.fullName}
          </Text>
        </View>
        <ScrollView>
          <Card containerStyle={styles.sectionCard}>
          <Text style={styles.sectionText}>
            Sorry, a history is not available for the selected park.
          </Text>
          </Card>
          </ScrollView>
      </HistoryContainer>
    )
  }
  else{
    console.log(HistoryFinal?.substring(0, 100))
  return (
    <HistoryContainer>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
          marginBottom: 20
        }}
      >
        <ToggleDrawer />


        
        <Text adjustsFontSizeToFit
        style={styles.Heading}>
          History of {park.fullName}
        </Text>
      </View>
      <ScrollView>
        <Card containerStyle={styles.sectionCard}>
        <Text style={styles.sectionText}>
          {HistoryFinal}
        </Text>
        </Card>
        </ScrollView>
    </HistoryContainer>
  )
    
  }
  
}
export default HistoryPage