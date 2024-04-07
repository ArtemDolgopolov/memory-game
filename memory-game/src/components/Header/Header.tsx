import React from 'react'
import HeaderProps from '../../types/HeaderTypes'
import './Header.css'

export default function Header({ score, bestScore }: HeaderProps) {
  return (
    <>
      <div className='header-wrapper'>
        <div className='header-logo'>
          <h1>MEMORY GAME</h1>
        </div>
        <div className='scores'>
          <p>Score: {score}</p>
          <p>Best score: {bestScore}</p>
        </div>
      </div>
    </>
  )
}