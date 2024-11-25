import { useState, useEffect } from "react"
export function useCatImage({fact} ) {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        if (!fact) return
            //mas de una palabra:
        //const firstWord = fact.split(' ').slice(0, 3).join(' ')
        //const firstWord = fact.split(' ', 3).join(' ')
        const firstWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
        .then(response => {
            const { url } = response
            setImageUrl(url)
        })
    }, [fact])

    return { imageUrl }
}
