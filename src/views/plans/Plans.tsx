import { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { useAppDispatch, useAppSelector } from '../../store/Store'
import { getAllPlans } from '../../modules/plan/application/getAllPlans'
import { useNavigate } from 'react-router-dom'
import { setPlans, setPlanSelect } from '../../store/slices/PlanSlice'
import type { Plan } from '../../modules/plan/domain/models/Plan'

const Plans = () => {
  const sectionRef = useRef<any>(null)
  const navigate = useNavigate()

  const [selectType, setselectType] = useState<string>('')
  const dispatch = useAppDispatch()

  const { plans } = useAppSelector(state => state.plan)
  const { user } = useAppSelector(state => state.user)

  const handleSetPlanSelecet = async (plan: Plan) => {
    dispatch(setPlanSelect(plan))
    navigate('/resume')
  }

  const scrollToSection = (title: string) => {
    setselectType(title)
    const aux = plans.filter(el => el.age >= user.age)
    dispatch(setPlans(aux))
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  }
  const handleBack = () => {
    //console.log('handle bakc')
    navigate('/')
  }
  useEffect(() => {
    //handleGetPlans()
    dispatch(getAllPlans())
  }, [dispatch])

  useEffect(() => {
    //    console.log('user.age ', user.age)
    if (user.age === 0) navigate('/')
  }, [])

  return (
    <div>
      <Container
        user={user}
        plans={plans}
        selectType={selectType}
        setselectType={setselectType}
        scrollToSection={scrollToSection}
        sectionRef={sectionRef}
        handleBack={handleBack}
        handleSetPlanSelecet={handleSetPlanSelecet}
      />
    </div>
  )
}

export default Plans
