import React, { useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'


function Modal() {
    const [movie, setMovie] = useRecoilState(movieState)
    const [showModal, setShowModal] = useRecoilState(modalState)
    


    const handleClose = () => {
        setShowModal(false)
        
      }
    
  return (
    <MuiModal open={showModal} onClose={handleClose}>
    <>
    Modal        
    </>
    </MuiModal>
  )
}

export default Modal