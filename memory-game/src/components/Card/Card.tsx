import React from 'react'
import CardProps from '../../types/CardTypes'
import './Card.css'


export default function Card({ cards, onHandleClick }: CardProps): JSX.Element {
 return (
    <div className="cards-container">
     {cards.map((card) => (
       <div key={card.id} onClick={() => onHandleClick(card.id)}>
         <img src={card.image} alt={card.name} />
       </div>
    ))}
    </div>
 )
}