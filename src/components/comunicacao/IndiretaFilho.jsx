import React from "react"

const IndiretaFilho = props => {
    const randIdade = _ => Math.random()

    return (
        <div>
            <button onClick={()=> props.getData('Juca', randIdade(), 'M')}>Get Data</button>
        </div>
    )
}

export default IndiretaFilho