import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMyPractices = (user) => {
  return axios.get(apiUrl + '/my-practices/', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }
  )
}

export const markPractice = (id, user) => {
  return axios.patch(apiUrl + '/mark-practice/' + id, {}, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
