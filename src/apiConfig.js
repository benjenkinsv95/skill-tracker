let apiUrl
const apiUrls = {
  production: 'https://limitless-castle-29876.herokuapp.com/skill-tracker',
  development: 'http://localhost:4741/skill-tracker'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
