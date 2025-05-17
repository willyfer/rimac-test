import { useForm } from 'react-hook-form'
import Container from './Container'
import { type FormData } from './types'
import { useAppDispatch, useAppSelector } from '../../store/Store'
import { setUser } from '../../store/slices/UserSlice'
import { getUser } from '../../modules/user/application/getUser'
import { setLoading } from '../../store/slices/PlanSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const year = new Date().getFullYear()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { user, loading } = useAppSelector(state => state.user)
  const methods = useForm<FormData>({
    defaultValues: {
      documentType: 'DNI'
    }
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = methods

  const onSubmit = async (data: FormData) => {
    dispatch(setLoading(true))
    console.log('Form data:', data)
    dispatch(setUser({ ...user, ...data }))
    dispatch(getUser(() => navigate('/plans')))
    dispatch(setLoading(false))
    // navigate('/plans')
  }

  return (
    <Container
      year={year}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      methods={methods}
      errors={errors}
      loading={loading}
    />
  )
}

export default Login
