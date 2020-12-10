export interface AmenityDataType {
  id?: string
  name?: string
}
export interface ActivityDataType {
  id: string
  name: string
}

export interface AlertDataType {
  category: 'Danger' | 'Caution' | 'Information' | 'Park Closure'
  description: string
  id: string
  parkCode: string
  title: string
  url: string
}

export interface HistoryDataType {
  batchcomplete: string
  query: {
    normalized:{
      from: string
      to: string
    }[]
    pages: {
      [pageid: number] : {
        pageid: number
        ns: number
        title: string
        extract: string
      }
    }
  }
}
export interface HistoryType{
  data: HistoryDataType[]
}
export interface AlertType {
  total: string
  data: AlertDataType[]
  limit: string
  start: string
}
interface ImagesType {
  credit: string // Credit for this image
  crops?: {
    aspectRatio: number
    url: string // url for this cropped image
  }[]

  altText: string
  title: string // title for this image

  caption: string
  url: string // url to this image
}
export interface ParkData {
  /**
   * State(s) the park is located in (comma-delimited list)
   */
  states: string
  /**
   * General description of the weather in the park over the course of a year
   */
  weatherInfo: string
  /**
   * General overview of how to get to the park
   */
  directionsInfo: string
  addresses: {
    postalCode: string
    city: string
    stateCode: string
    line1?: string
    type: 'Physical' | 'Mailing'
    line3?: string
    line2?: string
  }[]
  entranceFees: {
    cost: string | number
    description: string
    title: string
  }[]
  topics: {
    id: string
    name: string
  }[]
  /**
   * Short park name (no designation)
   */
  name: string
  /**
   * @example 39.9818229675293
   */
  latitude: string

  activities: ActivityDataType[]
  operatingHours: {
    name: string
    description: string
    standardHours: {
      sunday: string
      monday: string
      tuesday: string
      wednesday: string
      thursday: string
      friday: string
      saturday: string
    }
    exceptions: {
      name: string
      startDate: Date | string
      endDate: Date | string
      exceptionHours: {
        sunday: string
        monday: string
        tuesday: string
        wednesday: string
        thursday: string
        friday: string
        saturday: string
      }
    }[]
  }[]
  /**
   * Park Website
   */
  url: string

  /**
   * @example -84.0711364746094
   */
  longitude: string
  contacts: {
    phoneNumbers: {
      phoneNumber: string
      description: string
      extension: string
      type: 'Voice' | 'Fax' | 'TTY'
    }[]
    emailAddresses: {
      emailAddress: string
      description: string
    }[]
  }
  entrancePasses: {
    cost: string
    description: string
    title: string
  }[]
  /**
   * A variable width character code used to identify a specific park
   */
  parkCode: string
  /**
   * Type of designation (eg, national park, national monument, national recreation area, etc)
   */
  designation: string
  images: ImagesType[]
  /**
   * Fill park name (with designation)
   */
  fullName: string

  /**
   * Park GPS coordinates
   * @example lat:39.9818229675293, long:-84.0711364746094
   */
  latLong: string

  id: string
  /**
   * Link to page, if available, that provides additional detail on getting to the park
   */
  directionsUrl: string

  // Introductory paragraph from the park homepage
  description: string
}
export interface Park {
  total: number | string
  data: ParkData[]
  limit: number | string
  start: number | string
}
export interface RelaventParks {
  /**
   * comma separated list of state codes
   * @example ID,MT,WY
   * */
  states: string | string[]

  /**
   * full name of related park
   * @example Yellowstone National Park
   */
  fullName: string

  /**
   * URL of related park website
   *
   * @example https://www.nps.gov/yell/index.htm
   */
  url: string

  /**
   * four letter park code
   * @example yell
   */
  parkCode: string

  /**
   * designation of park
   * @example: National Park
   */
  designation: string

  /**name of park
   * @example Yellowstone
   */
  name: string
}

export interface ThingsToDoData {
  shortDescription: string
  longDescription: string
  isReservationRequired: boolean | string
  season: string | string[]

  topics: { id: string; name: string }[]

  timeOfDayDescription: string
  locationDescription: string

  petsDescription: string

  durationDescription: string

  latitude: string
  activityDescription: string

  activities?: ActivityDataType[]

  url: string

  longitude: string

  reservationDescription: string

  arePetsPermitted: string | boolean

  duration: string

  relatedOrganizations: any[]

  location: string
  feeDescription: string
  doFeesApply: boolean | string

  title: string

  images: ImagesType[]

  timeOfDay: string | string[]

  tags: string | string[]

  seasonDescription: string

  id: string
  arePetsPermittedwithRestrictions?: boolean | string
  ageDescription: string
  relatedParks: RelaventParks[]
  accessibilityInformation: string
  age: string
}
export interface ThingsToDo {
  total: string
  data: ThingsToDoData[]
  limit: string
  start: string
}

export interface Temperature {
  temp: string
  feels_like: string
  temp_min: string
  temp_max: string
  pressure: string
  humidity: string
}

export interface WeatherConditions {
  description: string
  main: string
}

export interface Wind {
  deg: string
  gust: string
  speed: string
}

export interface LiveWeather {
  base: string
  clouds: {
    all: string
  }
  cod: string
  coord: {
    lon: string
    lat: string
  }
  dt: string
  id: string
  main: {
    temp: string
    feels_like: string
    temp_min: string
    temp_max: string
    pressure: string
    humidity: string
  }
  name: string
  sys: {
    country: string
    id: string
    sunrise: string
    sunset: string
    type: string
  }
  timezone: string
  visibility: string
  weather: {
    id: string
    main: string
    description: string
    icon: string
  }[]
  wind: {
    deg: string
    gust: string
    speed: string
  }
}