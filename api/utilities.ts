import Axios from 'axios'
import qs from 'qs'
export const createAxiosClient = (url: string, token?: string) => {
  return Axios.create({
    baseURL: url,
    headers: { Authorization: token, Accept: 'application/json' },
  })
}
export const formatUrl = (url: string, querystringParams?: any) => {
  const delim = url.indexOf('?') > -1 ? '&' : '?'
  var params = querystringParams
    ? qs.stringify(querystringParams, { indices: false })
    : null
  return `${url}${params ? delim + params : ''}`
}

export const RequestHeaders = {
  headers: { Accepts: 'application/json' },
}
