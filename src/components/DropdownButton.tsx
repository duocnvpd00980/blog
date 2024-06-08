/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactNode } from 'react'

interface Props {
  onPress: () => void
  children: ReactNode
}
const DropdownButton = ({ onPress, children }: Props) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {children}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button className="dropdown-item btn-none" onClick={onPress}>
          Action
        </button>
        <span className="dropdown-item">Another action</span>
      </div>
    </div>
  )
}

export default DropdownButton
