import React from "react"

const DiretaFilho = props => {
    return (
        <div>
            <div>{ props.nome }</div>
            <div>{ props.idade }</div>
            <div>{ props.ehNerd ? 'Verdadeiro' : 'Falso'}</div>
        </div>
    )
}

export default DiretaFilho