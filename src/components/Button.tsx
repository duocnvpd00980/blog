import React from 'react'

interface Props {
  onPress: () => void
  children: string
  color: 'primary' | 'secondary'
}

const Button = ({ onPress, children, color = 'primary' }: Props) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onPress}>
      {children}
    </button>
  )
}

export default Button
