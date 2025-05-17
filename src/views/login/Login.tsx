import { useForm } from 'react-hook-form'
import Container from './Container'
import logo from '../../assets/common/Logo-bn.svg'
import { type FormData } from './types'
import { useAppDispatch, useAppSelector } from '../../store/Store'
import { setUser } from '../../store/slices/UserSlice'
import { getUser } from '../../modules/user/application/getUser'
import { setLoading } from '../../store/slices/PlanSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

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
    reset,
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

  useEffect(() => {
    reset()
  }, [])
  return (
    <>
      <Container
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        methods={methods}
        errors={errors}
        loading={loading}
      />
      {/* FOOTER */}
      <div className='bg-[#03050F]  h-[106px]  w-full mx-auto  flex justify-center mt-18 md:mt-0  z-10'>
        <div className='w-7xl  flex justify-between items-center'>
          <div className='m-auto md:m-0'>
            <img src={logo} alt='' />
          </div>
          <div className='hidden md:block font-sonoma text-white'>
            © {year} RIMAC Seguros y Reaseguros.
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
