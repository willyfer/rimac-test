import React from 'react'
import type { Plan } from '../../modules/plan/domain/models/Plan'
import type { User } from '../../modules/user/domain/models/User'

export interface IcontainerProps {
  selectType: string
  setselectType: Function
  plans: Plan[]
  scrollToSection: (title: string) => void
  sectionRef: React.RefObject<any>
  handleBack: () => void
  handleSetPlanSelecet: (plan: Plan) => void
  user: User
}

export interface IPropsCardType {
  title: string
  description: string
  selected: boolean
  img: string
  onPress: Function
}

export type IpropsCardPlan = {
  plan: Plan
  handleSelect: (plan: Plan) => void
}
