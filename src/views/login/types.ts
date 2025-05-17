import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReturn
} from 'react-hook-form'

export interface FormData {
  document: string
  phone: string
  privacy: boolean
  commercial: boolean
  documentType: 'DNI' | 'CE'
}
export interface IloginProps {
  register: UseFormRegister<FormData>
  handleSubmit: UseFormHandleSubmit<FormData, FormData>
  onSubmit: (data: FormData) => void
  methods: UseFormReturn<FormData, any, FormData>
  errors: FieldErrors<FormData>
  loading: boolean
}
