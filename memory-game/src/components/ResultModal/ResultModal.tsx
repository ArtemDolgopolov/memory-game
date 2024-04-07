import React from 'react';
import Modal from 'react-modal'
import ResultModalProps from '../../types/ResultModalTypes'
import './ResultModal.css'

export default function ResultModal(
 { openModal,
   closeModal, 
   isWinner }: ResultModalProps) {
  const modalContent = () => {
      return (
        <div className='modal-container'>
          <img className='modal-img' src={isWinner == true ? 
          "https://giffiles.alphacoders.com/220/220793.gif" : 
          "https://i.pinimg.com/originals/f3/77/c1/f377c1543a90e9ca8640b6a4f1985d74.gif"} alt={isWinner == true ? "loser" : "winner"} />
          <p className='modal-message'>
            {isWinner == true ? 'You lose!' : 'You won!'}
          </p>
          <button onClick={closeModal} className='modal-close-button'>X</button>
        </div>
      );
  }

  return (
    <Modal 
      isOpen={openModal} 
      onRequestClose={closeModal}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
      ariaHideApp={false}
      closeTimeoutMS={300}
    >
      {modalContent()}
    </Modal>
  )
}