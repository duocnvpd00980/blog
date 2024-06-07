import React, { ReactNode } from 'react'
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form'

interface Props {
  submit: UseFormHandleSubmit<FieldValues, undefined>
  children: ReactNode
}

const FormModal = ({ submit, children }: Props) => {
  return (
    <form
      onSubmit={submit((data) => {
        alert(JSON.stringify(data))
      })}
    >
      {children}
    </form>
  )
}

export default FormModal
