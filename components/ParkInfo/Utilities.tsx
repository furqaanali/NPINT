import axios from 'axios'
import chalk from 'chalk'
import ApiClient from '../../api/ApiClient'
import WikiApiClient from '../../api/WikiApiClient'
import { AlertType, Park, ParkData, HistoryType, HistoryDataType, LiveWeather } from '../../api/types'
import { WIKI_API_ROOT } from '../../api/constants'

export const FetchAllParks = async () => {
  Log(LogEnum.Info, 'Fetching all parks')
  return await ApiClient.get(`/parks?limit=${1000}`)
    .then((res) => {
      /*  Log(
        LogEnum.Info,
        `parks response: ${JSON.stringify(res.data.data)}`
      ) */
      return res.data.data.filter((val: ParkData) => ParkCodes.includes(val.parkCode)) as ParkData[]
    })
}
export const FetchParkData = async (parkCode: string) => {
  return await ApiClient.get(`/parks?parkCode=${parkCode}`).then((res) => {
    //console.log(`response: ${res.data}`)
    return res.data as Park
  })
}

//Note although the parkName is a string, it needs to be formatted to
//replace ' ' with '_' either in this const or in the call
export const FetchParkHistory = async (parkName: string) => {
    //console.log(WIKI_API_ROOT + `api.php?origin=*&action=query&prop=extracts&format=json&explaintext&titles=${parkName}`)
    axios.interceptors.request.use(request => {
      console.log('starting request', JSON.stringify(request, null, 2))
      return request
    })
    return await WikiApiClient.get(`api.php?origin=*&action=query&prop=extracts&format=json&explaintext&titles=${parkName}`).then((res) => {
    return res.data as HistoryDataType
  })
}
export const FetchParkAlerts = async (parkCode: string) => {
  return await ApiClient.get(`/alerts?parkCode=${parkCode}`).then((res) => {
    return res.data as AlertType
  })
}

export const FetchWeatherFromLocation = async (
  latitude: string,
  longitude: string
) => {
  return await axios
    .get(
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
        latitude +
        '&lon=' +
        longitude +
        '&units=imperial&appid=' +
        '6f96faf16c29b719a5b99c1ae3d63ac8',
      { responseType: 'json' }
    )
    .then((res) => {
      console.log("lat = " + latitude + ".  lon = " + longitude)
      console.log(res.data)
      return res.data as LiveWeather
    })
    .catch(error => {
      Log(LogEnum.Error, `ERROR: ${error}`)
      return {} as LiveWeather
    })
}

export enum LogEnum {
  Info = 0,
  Error = 1,
  Warn = 2,
  Help = 3,
}
export interface Log {
  type: LogEnum.Info | LogEnum.Error | LogEnum.Warn | LogEnum.Help
}
export const Log = (logType: LogEnum, message: string) => {
  switch (logType) {
    case LogEnum.Info: {
      console.log(chalk.bgBlueBright(message))
      break
    }
    case LogEnum.Warn: {
      console.log(chalk.bgYellowBright(chalk.bold('WARN: ') + message))
      break
    }
    case LogEnum.Help: {
      console.log(chalk.bgGreenBright(message))
      break
    }
    case LogEnum.Error: {
      console.log(chalk.bgRedBright(chalk.bold('ERROR: ') + message))
      break
    }
  }
}
export const ParkCodes = [
  'acad',
  'arch',
  'badl',
  'bibe',
  'bisc',
  'blca',
  'brca',
  'cany',
  'care',
  'cave',
  'chis',
  'crla',
  'cuva',
  'dena',
  'deva',
  'drto',
  'ever',
  'gaar',
  'glac',
  'glba',
  'grba',
  'grca',
  'grsa',
  'grsm',
  'grte',
  'gumo',
  'hale',
  'havo',
  'hosp',
  'indu',
  'isro',
  'jeff',
  'jotr',
  'katm',
  'kefj',
  'kova',
  'lacl',
  'lavo',
  'maca',
  'meve',
  'mora',
  'noca',
  'npsa',
  'olym',
  'pefo',
  'pinn',
  'redw',
  'romo',
  'sagu',
  'seki',
  'shen',
  'thro',
  'viis',
  'voya',
  'whsa',
  'wica',
  'wrst',
  'yell',
  'yose',
  'zion',
]
export const MapImagesSwitch = (parkCode: string) => {
  switch(parkCode) {
    case 'acad':
      return [{
        url: '',
        props: {source: require('./maps_parks/acad/ACADmap1.jpg')}
      },{
        url: '',
        props: {source: require('./maps_parks/acad/ACADmap2.jpg')}
      },{
        url: '',
        props: {source: require('./maps_parks/acad/ACADmap3.jpg')}
      },{
        url: '',
        props: {source: require('./maps_parks/acad/ACADmap4.jpg')}
      },
    ]
  case 'arch':
    return [{
      url: '',
      props: {source: require('./maps_parks/arch/ARCHmap1.jpg')}
    }]
  case 'badl':
    return [{
      url: '',
      props: {source: require('./maps_parks/badl/BADLmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/badl/BADLmap2.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/badl/BADLmap3.jpg')}
    },]
  case 'bibe':
    return [{
      url: '',
      props: {source: require('./maps_parks/bibe/BIBEmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/bibe/BIBEmap2.jpg')}
    }]
  case 'bisc':
    return [{
      url: '',
      props: {source: require('./maps_parks/bisc/BISCmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/bisc/BISCmap2.jpg')}
    }]
  case 'blca':
    return [{
      url: '',
      props: {source: require('./maps_parks/blca/BLCAmap1.jpg')}
    },{
      url: '',
     props: { source: require('./maps_parks/blca/BLCAmap2.jpg')}
    },{
      url: '',
     props: { source: require('./maps_parks/blca/BLCAmap3.jpg')}
    }]
  case 'brca':
    return [{
      url: '',
      props: {source: require('./maps_parks/brca/BRCAmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/brca/BRCAmap2.jpg')}
    }]
  case 'cany':
    return [{
      url: '',
      props: {source: require('./maps_parks/cany/CANYmap1.jpg')}
    }]
  case 'care':
    return [{
      url: '',
      props: {source: require('./maps_parks/care/CAREmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/care/CAREmap2.jpg')}
    }]
  case 'cave':
    return [{
      url: '',
      props: {source: require('./maps_parks/cave/CAVEmap1.jpg')}
    }]
  case 'chis':
    return [{
      url: '',
      props: {source: require('./maps_parks/chis/CHISmap1.jpg')}
    }]
  case 'crla':
    return [{
      url: '',
      props: {source: require('./maps_parks/crla/CRLAmap1.jpg')}
    }, {
      url: '',
      props: {source: require('./maps_parks/crla/CRLAmap2.jpg')}
    }]
  case 'cuva':
    return [{
      url: '',
      props: {source: require('./maps_parks/cuva/CUVAAreaMap.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/cuva/CUVAParkMap.jpg')}
    }]
  case 'dena':
    return [{
      url: '',
      props: {source: require('./maps_parks/dena/DENAmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/dena/DENAmap2.jpg')}
    },]
  case 'deva':
    return [{
      url: '',
      props: {source: require('./maps_parks/deva/DEVAmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/deva/DEVAmap2.jpg')}
    },]
  case 'drto':
    return [{
      url: '',
      props: {source: require('./maps_parks/drto/DRTOrelief1.jpg')}
    }]
  case 'ever':
    return [{
      url: '',
      props: {source: require('./maps_parks/ever/EVERParkMap.jpg')}
    }]
  case 'gaar':
    return [{
      url: '',
      props: {source: require('./maps_parks/gaar/GAARmap1.jpg')}
    }]
  case 'glac':
    return [{
      url: '',
      props: {source: require('./maps_parks/glac/GLACmap1.jpg')}
    }]
  case 'glba':
    return [{
      url: '',
      props: {source: require('./maps_parks/glba/GLBAmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/glba/GLBAmap3.jpg')}
    }]
  case 'grba':
    return [{
      url: '',
      props: {source: require('./maps_parks/grba/GRBAmap1.jpg')}
    }]
  case 'grca':
    return [{
      url: '',
      props: {source: require('./maps_parks/grca/GRCAmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/grca/GRCAmap2.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/grca/GRCAmap3.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/grca/GRCAmap4.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/grca/GRCAmap6.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/grca/GRCAmap7.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/grca/GRCAmap8.jpg')}
    }]
  case 'grsa':
    return [{
      url: '',
      props: {source: require('./maps_parks/grsa/GRSAmap1.jpg')}
    }]
  case 'grsm':
    return [{
      url: '',
      props: {source: require('./maps_parks/grsm/GRSMmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/grsm/GRSMmap2.jpg')}
    }]
  case 'grte':
    return [{
      url: '',
      props: {source: require('./maps_parks/grte/GRTEmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/grte/GRTEmap2.jpg')}
    }]
  case 'gumo':
    return [{
      url: '',
      props: {source: require('./maps_parks/gumo/GUMOmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/gumo/GUMOmap2.jpg')}
    }]
  case 'hale':
    return [{
      url: '',
      props: {source: require('./maps_parks/hale/HALEmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/hale/HALEmap2.jpg')}
    }]
  case 'havo':
    return [{
      url: '',
      props: {source: require('./maps_parks/havo/HAVOIslandmap.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/havo/HAVOKilaueamap.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/havo/kahuku_map.jpg')}
    }]
  case 'indu':
    return [{
      url: '',
      props: {source: require('./maps_parks/indu/INDUmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/indu/INDUmap2.jpg')}
    }]
  case 'isro':
    return [{
      url: '',
      props: {source: require('./maps_parks/isro/ISROmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/isro/ISROmap2.jpg')}
    }]
  case 'jeff':
    return [{
      url: '',
      props: {source: require('./maps_parks/jeff/JEFFmap2.jpg')}
    }]
  case 'jotr':
    return [{
      url: '',
      props: {source: require('./maps_parks/jotr/JOTRmap1.jpg')}
    }]
  case 'katm':
    return [{
      url: '',
      props: {source: require('./maps_parks/katm/KATMmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/katm/KATMmap2.jpg')}
    }]
  case 'kefj':
    return [{
      url: '',
      props: {source: require('./maps_parks/kefj/KEFJmap1.jpg')}
    }]
  case 'kova':
    return [{
      url: '',
      props: {source: require('./maps_parks/kova/WEARmap1.jpg')}
    }]
  case 'lacl':
    return [{
      url: '',
      props: {source: require('./maps_parks/lacl/LACLmap1.jpg')}
    }]
  case 'lavo':
    return [{
      url: '',
      props: {source: require('./maps_parks/lavo/LAVOmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/lavo/LAVOmap2.jpg')}
    }]
  case 'maca':
    return [{
      url: '',
      props: {source: require('./maps_parks/maca/MACADetailMap.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/maca/MACAParkMap.jpg')}
    }]
  case 'meve':
    return [{
      url: '',
      props: {source: require('./maps_parks/meve/MEVEmap1.jpg')}
    }]
  case 'mora':
    return [{
      url: '',
      props: {source: require('./maps_parks/mora/MORAmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/mora/MORAmap2.jpg')}
    }]
  case 'noca':
    return [{
      url: '',
      props: {source: require('./maps_parks/noca/NOCAAreaMap.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/noca/NOCAParkMap.jpg')}
    }]
  case 'npsa':
    return [{
      url: '',
      props: {source: require('./maps_parks/npsa/NPSAmap2.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/npsa/NPSAmap3.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/npsa/NPSAmap4.jpg')}
    }]
  case 'olym':
    return [{
      url: '',
      props: {source: require('./maps_parks/olym/OLYMmap1.jpg')}
    }]
  case 'pefo':
    return [{
      url: '',
      props: {source: require('./maps_parks/pefo/PEFOmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/pefo/PEFOmap2.jpg')}
    }]
  case 'pinn':
    return [{
      url: '',
      props: {source: require('./maps_parks/pinn/PINNmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/pinn/PINNmap2.jpg')}
    }]
  case 'redw':
    return [{
      url: '',
      props: {source: require('./maps_parks/redw/REDWmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/redw/REDWmap5.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/redw/REDWmap6.jpg')}
    }]
  case 'romo':
    return [{
      url: '',
      props: {source: require('./maps_parks/romo/ROMOmap1.jpg')}
    }]
  case 'sagu':
    return [{
      url: '',
      props: {source: require('./maps_parks/sagu/SAGUmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/sagu/SAGUmap2.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/sagu/SAGUmap4.jpg')}
    }]
  case 'seki':
    return [{
      url: '',
      props: {source: require('./maps_parks/seki/SEKImap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/seki/SEKImap2.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/seki/SEKImap3.jpg')}
    }]
  case 'shen':
    return [{
      url: '',
      props: {source: require('./maps_parks/shen/SHENmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/shen/SHENmap2.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/shen/SHENmap3.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/shen/SHENmap4.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/shen/SHENmap5.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/shen/SHENmap6.jpg')}
    }]
  case 'thro':
    return [{
      url: '',
      props: {source: require('./maps_parks/thro/THROmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/thro/THROmap2.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/thro/THROmap3.jpg')}
    }]
  case 'viis':
    return [{
      url: '',
      props: {source: require('./maps_parks/viis/VIISmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/viis/VIISmap2.jpg')}
    }]
  case 'voya':
    return [{
      url: '',
      props: {source: require('./maps_parks/voya/VOYAmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/voya/VOYAmap2.jpg')}
    }]
  case 'whsa':
    return [{
      url: '',
      props: {source: require('./maps_parks/whsa/WHSAmap1.jpg')}
    }]
  case 'wica':
    return [{
      url: '',
      props: {source: require('./maps_parks/wica/WICAmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/wica/WICAmap2.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/wica/WICAmap3.jpg')}
    }]
  case 'wrst':
    return [{
      url: '',
      props: {source: require('./maps_parks/wrst/WRST_Park_Map.jpg')}
    }]
  case 'yell':
    return [{
      url: '',
      props: {source: require('./maps_parks/yell/YELLmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/yell/YELLmap2.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/yell/YELLmap4.jpg')}
    }]
  case 'yose':
    return [{
      url: '',
      props: {source: require('./maps_parks/yose/YOSEmap1.jpg')}
    },{
      url: '',
      props: {source: require('./maps_parks/yose/YOSEmap2.jpg')}
    }]
  case 'zion':
    return [{
      url: '',
      props: {source: require('./maps_parks/zion/ZIONmap1.jpg')}
    }]
  default:
    return [{
      url:'',
      props: {source: require('./maps_parks/zion/ZIONmap1.jpg')}
    }]
  }
}