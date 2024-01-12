// import { useEffect, useState } from "react"
import Card from "./Card"
import { useGetflats } from "../utils/hooks"
import MissingPage from "../pages/MissingPage"

const Gallery = () => {
    const { data, error, isLoading } = useGetflats()

    if (error) {
        return <MissingPage />
    }


    return (
        <div id="gallery">
            {isLoading ? (<div>Chargement...</div>) :
                (
                    data.map((flat) => (
                        <Card
                            title={flat.title}
                            cover={flat.cover}
                            key={flat.id}
                            id={flat.id}
                        />
                    ))
                )
            }
        </div>
    )
}

export default Gallery 