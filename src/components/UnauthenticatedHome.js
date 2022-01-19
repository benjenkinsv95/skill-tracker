import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import heroStyles from '../styles/heroStyles'

const Home = ({ user }) => {
  if (user) {
    return <Navigate to="my-skills" />
  }
  return (
    <div style={heroStyles}>
      <h1>Skill Tracker</h1>
      <h2 className='mb-3'>Sign In to start tracking skills!</h2>
      <Link to='/sign-in'>
        <button className='btn btn-dark btn-lg'>
  Sign In
        </button>
      </Link>

    </div>
  )
}

export default Home
