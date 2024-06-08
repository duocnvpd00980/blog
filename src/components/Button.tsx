import React from 'react'

interface Props {
  onPress: () => void
  children: string
  color: 'primary' | 'secondary'
  outline?: boolean
}

const Button = ({ onPress, children, color = 'primary', outline }: Props) => {
  return (
    <button
      type="button"
      className={`btn ${color && !outline && `btn-${color}`} ${outline && `btn-outline-primary`}`}
      onClick={onPress}
    >
      {children}
    </button>
  )
}

export default Button
