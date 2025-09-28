  /*
  IMPORTS
  */ 

  //Images
  import { cypherpunks } from './assets/images'

  import type { Card, mixedCard } from './assets/images'

  //States 
  import { useState, useEffect } from 'react'

  //styles
  import './App.css'


  function App() {
    const [cards, setCards] = useState<mixedCard[]>([]);
    const [picked, setPicked] = useState<string[]>([]);
    const [score, setScore] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [biography, setBiography] = useState<string>("");

    //montar e embaralhar as cartas 
    useEffect(() => {
      resetGame();
    }, []);

    const handleChoice = (card: Card) => {
      if (picked.includes(card.name)){
        setGameOver(true);
        console.log("You lose");
      } else {
        setPicked((prev) => [...prev, card.name]);
        setScore((prev) => prev + 1);
        setBiography(card.bio);
        cardMixer();
      }
    };

    const cardMixer = () => {
      setCards(
        (
          cypherpunks
          .map((card) => ({...card, id: Math.random()}))
          .sort(() => Math.random() - 0.5)
        )
      );
    }

    const resetGame = () => {
      setPicked([]);
      setScore(0);
      setGameOver(false);
      cardMixer();
    };

    return (
      <div id="container">
      <div id='GameHeader'>
        <h1>
          Memory Card - Cypherpunks
        </h1>
        <p>Regras: Tente selecionar todas as cartas sem repetir nenhuma para vencer.</p>
      </div>

      <div id='cypherpunks'>
        {cards.map((card) => (
          <img 
          key={card.name}
          src={card.src}
          alt={card.name}
          width={250}
          onClick={() => !gameOver && handleChoice(card)}
          />
        ))}
      </div>

      <div className='score'>
      <h2>
        Score: {score}
      </h2>
      {gameOver && (
        <div className='scoreBox'> 
        <h2>You are a loser</h2>
        <button className = "btns" onClick={resetGame}>Reset</button>
        </div>
      )}

      {score === 10 && (
        <div className='scoreBox'>
        <h2>
          Você venceu
        </h2>
        <button className = "btns" onClick={resetGame}>Reset</button>
        </div>
      )}
      </div>

      <h1>
        {biography}
      </h1>

      <div id='footer'>
        <a>
        <h3>
          GITHUB
        </h3>
        </a>
      </div>
      </div>
    )
  }

  export default App
