import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import Button from './Button'
import Submit from './FormSubmit'

interface Props {
  show: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 102vh;
  display: flex;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 20%, 0.3);
  .modal-dialog {
    width: 100%;
    max-width: 51.25rem;
  }
`

const Modal = ({ show, onClose, title, children }: Props) => {
  if (!show) return null
  return (
    <ModalStyled>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <Button color="secondary" onPress={onClose}>
              Close
            </Button>
            <Submit color="primary">Save changes</Submit>
          </div>
        </div>
      </div>
    </ModalStyled>
  )
}

export default Modal
