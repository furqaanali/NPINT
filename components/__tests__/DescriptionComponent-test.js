import ParkButtonList from '../ParkInfo/Selection'
import { italic } from "chalk"
import { useNavigation} from '@react-navigation/native'
import Navigation from '../../navigation'
import * as React from 'react'
import store from '../state/store'
import { ParkData } from '../../api/types'
import { FetchParkData, FetchAllParks } from '../ParkInfo/Utilities'
import { CHANGE_PARK } from '../state/actions'
import ParkDescription from '../ParkInfo/Description'
import ApiClient from '../../api/ApiClient'

// Testing attempt of description data retrieval without a park specified
it('No Park specified', async () => {
  park = store.getState()
  test_string = "No Park Specified"
  
  console.log = jest.fn();

  ParkDescription(Navigation);
  expect(console.log).toHaveBeenCalledWith(test_string)
})

// Testing regular park, such as Acadia
it('Regular Park Name', async () => {
  const data = await FetchParkData('acad')
  store.dispatch({type: CHANGE_PARK, payload: {...data.data[0]}})
  park = store.getState()
  description = JSON.stringify(park.description)
  directions = JSON.stringify(park.directionsInfo)
  weather = JSON.stringify(park.weatherInfo)
  combined = description + directions + weather
  
  console.log = jest.fn();

  ParkDescription(Navigation);
  expect(console.log).toHaveBeenCalledWith(combined)
})

// Testing irregular park name, specifically Haleakalā national park
it('Irregular Park Name', async () => {
  const data = await FetchParkData('hale')
  store.dispatch({type: CHANGE_PARK, payload: {...data.data[0]}})
  park = store.getState()
  description = JSON.stringify(park.description)
  directions = JSON.stringify(park.directionsInfo)
  weather = JSON.stringify(park.weatherInfo)
  combined = description + directions + weather
  
  console.log = jest.fn();

  ParkDescription(Navigation);
  expect(console.log).toHaveBeenCalledWith(combined)
})


// Testing multiple park changes, and ensure descriptions are still correct
it('Three park changes', async () => {
  data = await FetchParkData('acad')
  store.dispatch({type: CHANGE_PARK, payload: {...data.data[0]}})
  data = await FetchParkData('yell')
  store.dispatch({type: CHANGE_PARK, payload: {...data.data[0]}})
  data = await FetchParkData('zion')
  store.dispatch({type: CHANGE_PARK, payload: {...data.data[0]}})
  
  park = store.getState()
  description = JSON.stringify(park.description)
  directions = JSON.stringify(park.directionsInfo)
  weather = JSON.stringify(park.weatherInfo)
  combined = description + directions + weather
  
  console.log = jest.fn();

  ParkDescription(Navigation);
  expect(console.log).toHaveBeenCalledWith(combined)
})