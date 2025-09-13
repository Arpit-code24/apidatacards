import { useState, useEffect } from 'react'
import Navbar from './components/navbar'

function App() {
  const [cards, setcards] = useState([])

  const fetchCards = async () => {
    {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts")
      let data = await response.json()
      setcards(data)
      console.log(data)
    }
  }

  useEffect(() => {
    fetchCards()
  }, [])

  return(
    <>
    <Navbar/>
    <div className="container">
      {cards.map((card) => {
          return <div className="card" key={card.id}>
          <h2>{card.title}</h2> 
          <p>{card.body}</p>
          <span>By: UserId: {card.userId}</span>
        </div>
      })}
     </div> 
     </>
  )
}

export default App
