import React from "react"
import Header from "../components/header"

export async function getStaticProps(){
    const res = await fetch("https://awesome-conf.vercel.app/api/speakers")
    const speakers = await res.json()
    
    return {
        props: { speakers },
    }
}

export default function About({ speakers }) {

    const [likes, setLikes] = React.useState(0)

    function handleClick(){
        setLikes(likes + 1)
    }

    return <div>
        <Header title="Awesome conf" />
        <ul>
            {speakers.map(speaker=><li key={speaker}>{speaker} </li>)}
        </ul>
        <button onClick={handleClick}>Like ({likes})</button>
    </div>
}