import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import ResultModal from './components/ResultModal/ResultModal';
import CardType from './types/AppTypes';

export default function App() {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [cards, setCards] = useState<CardType[]>([]);
  const [isClicked, setIsClicked] = useState<number[]>([]);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  async function getApiCards(): Promise<void> {
    const response = await fetch('https://rickandmortyapi.com/api/character')
                     .then((response) => response.json());

    const data = response.results.slice(0, 12);
    setCards(data);
  }

  function winGame(): void {
    setBestScore(score + 1);
    setScore(0);
    setIsClicked([]);
    setIsWinner(false);
    setOpenModal(true);
  }

  function loseGame(): void {
    setScore(0);
    setIsClicked([]);
    setIsWinner(true);
    setOpenModal(true);
    if (score > bestScore) setBestScore(score);
  }

  function handleClickCard(id: number): void {
    const clickedCard = cards.find((i) => i.id === id);
    if (clickedCard && !isClicked.includes(clickedCard.id)) {
      setIsClicked([...isClicked, clickedCard.id]);
      setScore(score + 1);
      shuffle();
      if (score + 1 === 12) winGame();
    } else loseGame();
  }

  function shuffle(): void {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    setCards(shuffledCards);
  }

  useEffect(() => {
    getApiCards();
  }, []);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Card cards={cards} onHandleClick={handleClickCard} />
      <Footer />
      <ResultModal openModal={openModal} closeModal={() => setOpenModal(false)} isWinner={isWinner} />
    </>
  );
}