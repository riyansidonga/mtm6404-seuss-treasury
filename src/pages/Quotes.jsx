import { useEffect, useState } from "react"

function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
  }, [])

  return (
    <div>
      <h1>Quotes</h1>

      {quotes.map((quote, index) => (
        <p key={index}>{quote.text}</p>
      ))}
    </div>
  )
}

export default Quotes