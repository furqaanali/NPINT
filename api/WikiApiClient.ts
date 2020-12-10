import Axios from 'axios'
import { WIKI_API_ROOT } from './constants'

const WikiApiClient = Axios.create({
  baseURL : WIKI_API_ROOT,
  responseType: 'json',
})
export default WikiApiClient