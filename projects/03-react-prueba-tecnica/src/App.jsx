import './App.css'
import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from "./hooks/useCatFact.js"
import { Otro } from './Components/Otro.jsx'

export function App () {
    const { fact, refreshFact } = useCatFact() 
    const { imageUrl } = useCatImage({ fact })

        const handleClick = async () => {
            refreshFact()
        }

    return (
        <main>
            <h1> App de gatitos </h1>
            <button onClick={handleClick}>Get new fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word for ${fact}`}/>}
            </section>
        </main>
    )
}