import { useState } from "react"

const Home = () => {
    const [title, setTitle] = useState('')

    const handleClick = () => {
        setTitle('Yoan')
    }

    return (
        <div>
            <h1 onClick={() => handleClick()}>Bienvenu {title}</h1>
        </div>
    )
}


export default Home