import React from 'react'

export default function IdeaCard({idea}) {
    return (
        <div>
            <h1>{idea.content}</h1>
            <h2>{idea.category}</h2>
            <p>{idea.date}</p>
        </div>
    )
}