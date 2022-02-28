import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMyPractices = async (user) => {
  const res = await axios.get(apiUrl + '/my-practices/', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  }
  )

  // sort the practices by the `virtual` streakInDays
  // since it is a virtual, we can't use `sort` in mongoose
  res.data.practices.sort((a, b) => a.streakInDays - b.streakInDays || b.daysSinceStreak - a.daysSinceStreak)

  // then pass along the sorted data
  return Promise.resolve({ ...res })
}

export const markPractice = (id, user) => {
  axios.patch(apiUrl + '/mark-practice/' + id + '/', {}, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
