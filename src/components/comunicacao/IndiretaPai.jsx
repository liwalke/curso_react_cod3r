import React, { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

const IndiretaPai = props => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [sexo, setSexo] = useState('')

    function cb(nome, idade, sexo){
        setNome(nome)
        setIdade(idade)
        setSexo(sexo)
    }

    return (
        <div>
            <p>{ nome }</p>
            <p>{ idade }</p>
            <p>{ sexo }</p>
            <IndiretaFilho getData={cb}/>
        </div>
    )
}

export default IndiretaPai