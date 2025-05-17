import { useEffect } from 'react'
import { useAppSelector } from '../../store/Store'
import Container from './Container'
import { useNavigate } from 'react-router-dom'

const Summary = () => {
  const navigate = useNavigate()

  const { planSelect } = useAppSelector(state => state.plan)
  const { user } = useAppSelector(state => state.user)

  const handleBack = () => {
    //console.log('handle bakc')
    navigate('/plans')
  }
  useEffect(() => {
    console.log('user.age ', user)
    if (user.name === '') navigate('/')
  }, [])
  return (
    <div>
      <Container plan={planSelect} handleBack={handleBack} user={user} />
    </div>
  )
}

export default Summary
