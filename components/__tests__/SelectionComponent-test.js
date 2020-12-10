import ParkButtonList from '../ParkInfo/Selection'
import { italic } from "chalk"
import { useNavigation} from '@react-navigation/native'
import Navigation from '../../navigation'
import * as React from 'react'
import store from '../state/store'
import { ParkData } from '../../api/types'
import { FetchParkData, FetchAllParks } from '../ParkInfo/Utilities'
import { CHANGE_PARK } from '../state/actions'
// import ParkButtonList from '../ParkInfo/Description'
import ApiClient from '../../api/ApiClient'

// Testing selection of regular park, such as Acadia
it('Regular Park Name', async () => {
  const data = await FetchParkData('acad')
  store.dispatch({type: CHANGE_PARK, payload: {...data.data[0]}})
  park = store.getState()
  testString = "Subscribed. Park: acad"
  
  console.log = jest.fn();

  ParkButtonList(Navigation);
  expect(console.log).toHaveBeenCalledWith(testString)
})
