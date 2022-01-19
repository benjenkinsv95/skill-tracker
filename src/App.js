/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import UnauthenticatedHome from './components/UnauthenticatedHome'
import MySkills from './components/skills/MySkills'

const loadUser = () => {
  // eslint-disable-next-line no-undef
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

const App = () => {
  const [user, setUser] = useState(loadUser())
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main>
        <Routes>
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} user={user} setUser={setUser} /> }
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} user={user} setUser={setUser} /> }
          />
          <Route
            path='/sign-out'
            element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /> }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} /> }
          />
          <Route
            path='/'
            element={<UnauthenticatedHome user={user} />}
          />
          <Route
            path='/my-skills'
            element={<MySkills msgAlert={msgAlert} user={user} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
