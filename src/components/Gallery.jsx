import { useEffect, useState } from "react"
import Card from "./Card"



const Gallery = () => {

    const [flats, setFlats] = useState ([])
    
    useEffect(() => {
        fetch("annonce.json")
        .then((res) => res.json())
        .then((res) => setFlats(res))
        .catch(console.error)
    }, [])

    
    
        
    return (
        <div id="gallery">
            {flats.map((flat) => (
                <Card 
                    title={flat.title}
                    cover={flat.cover}
                    key={flat.id}
                    />
                
                ))}            
        </div>
    )
}

export default Gallery 