import React from 'react'

interface Props {
  children: string
  color: 'primary' | 'secondary'
}

const Submit = ({ children, color = 'primary' }: Props) => {
  return (
    <button type="submit" className={`btn btn-${color}`}>
      {children}
    </button>
  )
}

export default Submit
