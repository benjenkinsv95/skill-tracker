import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getMyPractices, markPractice } from '../../api/practices'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import { gradientStyles } from '../../styles/heroStyles'

const MySkills = ({ user, msgAlert }) => {
  const [practices, setPractices] = useState(null)

  if (!user) {
    return <Navigate to="/sign-in" />
  }

  useEffect(() => {
    const fetchPractices = async () => {
      try {
        const res = await getMyPractices(user)
        setPractices(res.data.practices)
      } catch (error) {
        console.error('Failed to load practices', error)
        msgAlert({
          heading: 'Failed to load practices',
          message: 'Try again later',
          variant: 'danger'
        })
      }
    }

    fetchPractices()
  }, [])

  const handlePracticeClick = (id) => {
    console.log('practice clicked')
    markPractice(id, user)
  }

  let practiceJSX

  // if we're loading practices, show a loading spinner
  if (!practices) {
    practiceJSX = (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  } else if (practices.length === 0) {
    practiceJSX = <h3>It looks like dont have any practices yet!</h3>
  } else {
    practiceJSX = (
      <div className='row'>
        {practices.map(({ _id, skill, daysStreak }) => (
          <div className='col-md-6 col-lg-4 mb-4' key={_id}>
            <Card className='text-center' bg='dark' text='white'>
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
                {skill.description && <Card.Text>{skill.description}</Card.Text>}
                {skill.reviewUrl && (
                  <a href={skill.reviewUrl} target='_blank' rel="noreferrer">
                    <Button className='me-2' variant="outline-primary" size="lg">Review</Button>
                  </a>
                )}
                {skill.practiceUrl && (
                  <a href={skill.practiceUrl} target='_blank' rel="noreferrer">
                    <Button variant='secondary' size='lg' onClick={() => handlePracticeClick(_id)}>
                        Practice
                    </Button>
                  </a>
                )}

              </Card.Body>
              <Card.Footer className='text-muted'>{daysStreak} day practice streak 🔥</Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={gradientStyles}>
      <div className='container'>
        <h1 className='pt-4 pb-2'>My Skills</h1>
        {practiceJSX}
      </div>
    </div>
  )
}

export default MySkills
