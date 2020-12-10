import Axios from 'axios'
import { NATIONAL_PARK_API_ROOT} from './constants'

const ApiClient = Axios.create({
  baseURL: NATIONAL_PARK_API_ROOT,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': 'PmQ9ZqQfZQh9t3b9HLWQsz3K1ayVrjJmGnhG90zd',
  },
})
export default ApiClient

