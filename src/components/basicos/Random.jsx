import React from "react"

const RandomNumber = props => {
    const randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <p>The random number is: { randomNumber }</p>
    )
}

export default RandomNumber