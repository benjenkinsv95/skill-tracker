let apiUrl
const apiUrls = {
  production: 'https://bens-django-api.herokuapp.com/skill-tracker',
  development: 'http://localhost:8000/skill-tracker'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
